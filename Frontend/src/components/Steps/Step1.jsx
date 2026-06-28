export default function StepOne({

    formData,
    setFormData,
    nextStep

}) {

    const handleChange = (e)=>{

        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });

    }

    return (

        <div>

            <h2>Basic Information</h2>

            <input
                type="text"
                name="title"
                placeholder="Study Plan Title"
                value={formData.title}
                onChange={handleChange}
            />

            <input
                type="text"
                name="examName"
                placeholder="Exam Name"
                value={formData.examName}
                onChange={handleChange}
            />

            <button onClick={nextStep}>
                Next →
            </button>

        </div>

    );

}