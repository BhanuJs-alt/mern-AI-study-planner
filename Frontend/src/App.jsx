import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreatePlan from "./pages/CreatePlan";
import PlanDetails from "./pages/PlanDetails";
import Analytics from "./pages/Analytics";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

       <Route
             path="/dashboard"
             element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
      
        <Route path="/plans/new" element={<CreatePlan />} />
        <Route path="/plans/:id" element={<PlanDetails />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
