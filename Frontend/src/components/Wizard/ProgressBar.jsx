import '../../styles/ProgressBar.css';
export default function ProgressBar({ step }) {

    const steps = [
        "Basic",
        "Target",
        "Subjects",
        "Review"
    ];

    return (
        <div className="progress-container">

            {steps.map((item, index) => (

                <div
                    key={item}
                    className={`progress-step ${step >= index + 1 ? "active" : ""}`}
                >
                    <div className="circle">
                        {index + 1}
                    </div>

                    <span>{item}</span>
                </div>

            ))}

        </div>
    );
}