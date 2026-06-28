import "../styles/Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="tag">
          ✨ Plan Smarter. Study Better.
        </div>

        <h1>
          Your <span>AI-Powered</span>
          <br />
          Study Partner
        </h1>

        <p>
          Create personalized study plans in seconds.
          Track your progress, stay focused, and let AI
          organize your preparation for exams.
        </p>

        <div className="hero-buttons">
          
        <Link to="/register">
          <button className="primary">
            Get Started →
          </button>
        </Link>

        </div>

        <div className="hero-features">

          <div>✔ Personalized Plans</div>

          <div>🧠 AI Insights</div>

          <div>📈 Track Progress</div>

        </div>

      </div>

      <div className="hero-right">

        <div className="dashboard">

          <div className="card todo">
            <h3>Today's Plan</h3>

            <p>📚 Mathematics</p>
            <p>💻 DSA Practice</p>
            <p>📖 Aptitude</p>
          </div>

          <div className="card progress">
            <h3>Progress</h3>

            <div className="circle">
              78%
            </div>
          </div>

          <div className="robot">
            🤖
          </div>

        </div>

      </div>

    </section>
  );
}