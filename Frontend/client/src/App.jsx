import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewPlan from "./pages/NewPlan";
import PlanView from "./pages/PlanView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes — we'll add protection in Phase 2 */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/plans/new" element={<NewPlan />} />
        <Route path="/plans/:id" element={<PlanView />} />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;