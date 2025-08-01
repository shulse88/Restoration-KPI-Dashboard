[08:50:46.455] Running build in Washington, D.C., USA (East) – iad1
[08:50:46.456] Build machine configuration: 2 cores, 8 GB
[08:50:46.480] Cloning github.com/shulse88/Restoration-KPI-Dashboard (Branch: main, Commit: 27b7fe5)
[08:50:46.501] Skipping build cache, deployment was triggered without cache.
[08:50:48.069] Cloning completed: 1.589s
[08:50:51.037] Running "vercel build"
[08:50:51.541] Vercel CLI 44.6.4
[08:50:52.481] Running "install" command: `npm install`...
[08:50:53.985] 
[08:50:53.985] > restoration-kpi-dashboard@1.0.0 postinstall
[08:50:53.986] > chmod +x ./node_modules/.bin/vite
[08:50:53.986] 
[08:50:54.009] 
[08:50:54.009] added 3 packages, and audited 107 packages in 1s
[08:50:54.010] 
[08:50:54.010] 9 packages are looking for funding
[08:50:54.011]   run `npm fund` for details
[08:50:54.011] 
[08:50:54.011] found 0 vulnerabilities
[08:50:54.012] npm notice
[08:50:54.012] npm notice New major version of npm available! 10.9.2 -> 11.5.2
[08:50:54.013] npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.5.2
[08:50:54.013] npm notice To update run: npm install -g npm@11.5.2
[08:50:54.013] npm notice
[08:50:54.777] 
[08:50:54.778] > restoration-kpi-dashboard@1.0.0 build
[08:50:54.778] > vite build
[08:50:54.779] 
[08:50:55.065] [36mvite v7.0.6 [32mbuilding for production...[36m[39m
[08:50:55.125] transforming...
[08:50:55.213] [32m✓[39m 11 modules transformed.
[08:50:55.215] [31m✗[39m Build failed in 122ms
[08:50:55.216] [31merror during build:
[08:50:55.216] [31mCould not resolve "./components/ui/card" from "src/App.jsx"[31m
[08:50:55.216] file: [36m/vercel/path0/src/App.jsx[31m
[08:50:55.217]     at getRollupError (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:401:41)
[08:50:55.217]     at error (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:397:42)
[08:50:55.217]     at ModuleLoader.handleInvalidResolvedId (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21490:24)
[08:50:55.217]     at file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21450:26[39m
[08:50:55.233] Error: Command "npm run build" exited with 1
[08:50:58.151] Exiting build container