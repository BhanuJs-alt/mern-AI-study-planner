 import { useNavigate} from "react-router-dom";
 import { useState,useEffect } from "react";
 import api from "../api/axios";
 import Layout from "../components/layouts/Layout";
 import StatsCard from "../components/StatsCard";
 import PlanCard from "../components/PlanCard";
 import './Dashboard.css';
//  import {  MdSettings } from "react-icons/md";

export default function Dashboard() {
  const [plans,setPlans] = useState([]);

  const fetchPlans = async () =>{

    const response = await api.get("/plans");
    setPlans(response.data);
  }
  
  useEffect(()=>{
      fetchPlans();
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
        value="4"
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
              key={plan._id}
              title={plan.title}
              examDate={plan.targetDate}
              progress={42}
              generated= {true}
                  />
                ))}
            <PlanCard
              title="DSA Prep"
              examDate="20 Dec 2026"
              progress={0}
              generated={false}
            />
        </div>
  </Layout>
  </>
  );
}
