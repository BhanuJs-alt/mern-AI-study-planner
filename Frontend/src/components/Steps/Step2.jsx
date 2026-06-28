import '../../styles/Step2.css';
export default function StepTwo({ formData, setFormData,nextStep,prevStep }) {

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="step">

            <h2>Target Information</h2>

            <label>Target Date</label>

            <input
                type="date"
                name="targetDate"
                value={formData.targetDate}
                onChange={handleChange}
            />

            <label>
                Study Hours Per Day
            </label>

            <input
                type="range"
                min="1"
                max="12"
                name="studyHours"
                value={formData.studyHours}
                onChange={handleChange}
            />

            <p>{formData.studyHours} Hours / Day</p>
            
             <button onClick={prevStep}>
               Prev
            </button>
            <button onClick={nextStep}>
                Next →
            </button>
             

        </div>
    );
}