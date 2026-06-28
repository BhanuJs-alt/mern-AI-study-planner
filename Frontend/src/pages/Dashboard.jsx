 import { useNavigate} from "react-router-dom";
 import { useState,useEffect } from "react";
 import Layout from "../components/layouts/Layout";
 import StatsCard from "../components/StatsCard";
 import PlanCard from "../components/PlanCard";
 import '../styles/Dashboard.css';
 import fetchPlans from "../api/fetchPlans";
import generateSchedule from "../api/callAI";



export default function Dashboard() {
  const [plans,setPlans] = useState([]);

  
  useEffect(()=>{
      fetchPlans(setPlans);
  },[]);

  const navigate = useNavigate();

  return (
    <>
   <Layout>
      <div className="dashboard-header">
        <div>
          <h1>Welcome Back 👋</h1>
          <p>
            Manage your study plans and stay on track.
          </p>
        </div>

        <button className="new-plan-btn"
         onClick={()=>navigate("/plans/new")}>
         New Plan+
      </button>
      </div>

    <div className="stats-grid">
      <StatsCard
        title="Active Plans"
        value={plans.length}
      />
       

      <StatsCard
        title="Study Streak"
        value="12"
      />

      <StatsCard
        title="Hours Studied"
        value="86"
      />

      <StatsCard
        title="Upcoming Exams"
        value="2"
      />
    </div>
     
        <div className="plans-grid">                
          {plans.map((plan) => (
            <PlanCard
              plan = {plan}
              key={plan._id}
              onGenerate={()=>{generateSchedule(plan._id)}}
              progress={0}
                  />
                ))}
        </div>
  </Layout>
  </>
  );
}
