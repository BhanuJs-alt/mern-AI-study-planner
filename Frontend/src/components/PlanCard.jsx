import "./PlanCard.css";
import { Link} from "react-router-dom";
import { useState,useEffect } from "react";
import fetchPlan from '../api/getPlanID';

export default function PlanCard({
  id,
  title,
  examDate,
  progress,
  onGenerate,
}) {
    
   const [plan,setPlan] = useState([]);

   useEffect(()=>{
      fetchPlan(id,setPlan);
  },[]);

//   const handleGenerate =  () => {
//    onGenerate;
//    fetchPlan(id, setPlan); 
// };
  const  isGenerated = !!plan.generatedPlan;
  return (
    <div className="plan-card">
      <div className="plan-header">
        <h3>{title}</h3>

        <span className={isGenerated ? "status success" : "status pending"}>
          {isGenerated ? "Generated" : "Not Generated"}
        </span>
      </div>

      <p>📅 {examDate}</p>

      <div className="progress-section">
        <div className="progress-info">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="plan-actions">
        {!isGenerated ? (
          <button onClick={onGenerate}
            className="generate-btn">
            [Generate Schedule]
          </button>
        ) : (
          <Link to = {`/plans/${id}`}> 
            <button className="show-btn">
            [Show Schedule]
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}