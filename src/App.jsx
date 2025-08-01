import React, { useState } from "react";

export default function App() {
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
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Restoration KPI Dashboard</h1>

      <label>
        New Patients This Week:
        <input type="number" value={newPatients} onChange={(e) => setNewPatients(Number(e.target.value))} />
      </label>

      <label>
        Show Rate (%):
        <input type="number" value={showRate} onChange={(e) => setShowRate(Number(e.target.value))} />
      </label>

      <label>
        Case Acceptance (%):
        <input type="number" value={caseAcceptance} onChange={(e) => setCaseAcceptance(Number(e.target.value))} />
      </label>

      <label>
        Average Care Plan Value ($):
        <input type="number" value={carePlanValue} onChange={(e) => setCarePlanValue(Number(e.target.value))} />
      </label>

      <label>
        Retention Rate (%):
        <input type="number" value={retentionRate} onChange={(e) => setRetentionRate(Number(e.target.value))} />
      </label>

      <label>
        Wellness Score (0–100):
        <input type="number" value={wellnessScore} onChange={(e) => setWellnessScore(Number(e.target.value))} />
        <strong> Grade: {getWellnessGrade(wellnessScore)}</strong>
      </label>

      <label>
        Total Visits:
        <input type="number" value={visits} onChange={(e) => setVisits(Number(e.target.value))} />
      </label>

      <label>
        Cost Per Visit ($):
        <input type="number" value={costPerVisit} onChange={(e) => setCostPerVisit(Number(e.target.value))} />
        <strong> Total Plan Cost: ${totalCost.toFixed(2)}</strong>
      </label>

      <button style={{ marginTop: "20px", padding: "10px", backgroundColor: "#0070f3", color: "#fff", border: "none" }}>
        Run Gap Analysis
      </button>
    </div>
  );
}
