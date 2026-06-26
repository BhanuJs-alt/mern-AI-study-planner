import "./PlanCard.css";

export default function PlanCard({
  title,
  examDate,
  progress,
  generated,
}) {
  return (
    <div className="plan-card">
      <div className="plan-header">
        <h3>{title}</h3>

        <span className={generated ? "status success" : "status pending"}>
          {generated ? "Generated" : "Not Generated"}
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
        {!generated ? (
          <button className="generate-btn">
            Generate Schedule
          </button>
        ) : (
          <button className="show-btn">
            Show Schedule
          </button>
        )}
      </div>
    </div>
  );
}