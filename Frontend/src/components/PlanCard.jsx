import "./PlanCard.css";
import { Link} from "react-router-dom";
import generateSchedule from "../api/callAI";

export default function PlanCard({plan}) {
  const id = plan._id;
  const  isGenerated = !!plan.generatedPlan;
  
  const onGenerate = ()=>{
    generateSchedule(id);
  }

  return (
    <div className="plan-card">
      <div className="plan-header">
        <h3>{plan.title}</h3>

        <span className={isGenerated ? "status success" : "status pending"}>
          {isGenerated ? "Generated" : "Not Generated"}
        </span>
      </div>

      <p>📅 {plan.targetDate}</p>

      <div className="progress-section">
        <div className="progress-info">
          <span>Progress</span>
          <span>{plan.progress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${0}%` }}
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