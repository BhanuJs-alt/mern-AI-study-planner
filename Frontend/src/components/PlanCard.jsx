import './PlanCard.css';

export default function PlanCard({
  title,
  examDate,
  progress,
  generated,
}) {
  return (
    <div className="plan-card">
      <h3>{title}</h3>

      <p>{examDate}</p>

      <div>
        {generated
          ? "✅ Schedule Generated"
          : "⚪ Not Generated"}
      </div>

      <div>
        Progress: {progress}%
      </div>

      <button>
        Show Schedule
      </button>
    </div>
  );
}