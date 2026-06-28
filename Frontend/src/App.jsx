import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreatePlan from "./pages/CreatePlan";
import PlanDetails from "./pages/PlanDetails";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
