import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import Logo from "./assets/restoration-logo.png";

const sampleData = [
  { name: "Week 1", showRate: 55, caseAcceptance: 60, retention: 70 },
  { name: "Week 2", showRate: 63, caseAcceptance: 65, retention: 72 },
  { name: "Week 3", showRate: 70, caseAcceptance: 75, retention: 80 },
];

function RestorationKPIDashboard() {
  const [newPatients, setNewPatients] = useState(0);
  const [showRate, setShowRate] = useState(0);
  const [caseAcceptance, setCaseAcceptance] = useState(0);
  const [carePlanValue, setCarePlanValue] = useState(0);
  const [retentionRate, setRetentionRate] = useState(0);
  const [wellnessScore, setWellnessScore] = useState(0);
  const [visits, setVisits] = useState(0);
  const [costPerVisit, setCostPerVisit] = useState(0);

  const getWellnessGrade = (score) => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
  };

  const totalCost = visits * costPerVisit;

  return (
    <div className="p-6">
      <div className="mb-8 text-center">
        <img src={Logo} alt="Restoration Chiropractic Logo" width={200} height={80} className="mx-auto" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">New Patients This Week</h2>
          <input type="number" value={newPatients} onChange={e => setNewPatients(e.target.value)} className="w-full border p-2" />
        </div>

        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">Show Rate (%)</h2>
          <input type="number" value={showRate} onChange={e => setShowRate(e.target.value)} className="w-full border p-2" />
        </div>

        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">Case Acceptance (%)</h2>
          <input type="number" value={caseAcceptance} onChange={e => setCaseAcceptance(e.target.value)} className="w-full border p-2" />
        </div>

        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">Average Care Plan Value ($)</h2>
          <input type="number" value={carePlanValue} onChange={e => setCarePlanValue(e.target.value)} className="w-full border p-2" />
        </div>

        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">Retention Rate (%)</h2>
          <input type="number" value={retentionRate} onChange={e => setRetentionRate(e.target.value)} className="w-full border p-2" />
        </div>

        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">Wellness Score (0–100)</h2>
          <input type="number" value={wellnessScore} onChange={e => setWellnessScore(e.target.value)} className="w-full border p-2" />
          <p className="text-lg font-semibold">Grade: {getWellnessGrade(wellnessScore)}</p>
        </div>

        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">Care Plan Visits</h2>
          <input type="number" value={visits} onChange={e => setVisits(e.target.value)} className="w-full border p-2" />
          <h2 className="text-xl font-bold">Cost Per Visit ($)</h2>
          <input type="number" value={costPerVisit} onChange={e => setCostPerVisit(e.target.value)} className="w-full border p-2" />
          <p className="text-lg font-semibold">Total Plan Cost: ${totalCost.toFixed(2)}</p>
        </div>

        <div className="col-span-full p-4 border rounded shadow">
          <h2 className="text-xl font-bold mb-4">KPI Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sampleData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="showRate" stroke="#8884d8" name="Show Rate" />
              <Line type="monotone" dataKey="caseAcceptance" stroke="#82ca9d" name="Case Acceptance" />
              <Line type="monotone" dataKey="retention" stroke="#ffc658" name="Retention" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="col-span-full text-center">
          <button className="w-full p-2 bg-blue-600 text-white rounded">Run Gap Analysis & Suggestions</button>
        </div>
      </div>
    </div>
  );
}

export default RestorationKPIDashboard;
