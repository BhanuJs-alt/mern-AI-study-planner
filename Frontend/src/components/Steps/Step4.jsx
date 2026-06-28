export default function StepFour({ formData,prevStep }) {

    return (

       <div>

            <h3>Summary</h3>

            <p><strong>Title:</strong> {formData.title}</p>

            <p><strong>Exam:</strong> {formData.examName}</p>

            <p><strong>Target Date:</strong> {formData.targetDate}</p>

            <p><strong>Study Hours:</strong> {formData.studyHours} hrs/day</p>

            <p>
                <strong>Subjects:</strong>{" "}
                {formData.subjects.join(", ")}
            </p>
            <button onClick={prevStep}>
               Prev
          </button>
        </div>

    );

}