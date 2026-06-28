import { useState } from "react";
import '../../styles/Step3.css';
export default function StepThree({ formData, setFormData,nextStep,prevStep }) {
  const [subject, setSubject] = useState("");

  const addSubject = () => {
    const value = subject.trim();

    if (!value) return;

    // Prevent duplicates (case-insensitive)
    if (
      formData.subjects.some(
        (item) => item.toLowerCase() === value.toLowerCase()
      )
    ) {
      setSubject("");
      return;
    }

    setFormData({
      ...formData,
      subjects: [...formData.subjects, value],
    });

    setSubject("");
  };

  const removeSubject = (index) => {
    setFormData({
      ...formData,
      subjects: formData.subjects.filter((_, i) => i !== index),

      // Also remove from strengths & weaknesses
      strengths: formData.strengths.filter(
        (item) => item !== formData.subjects[index]
      ),

      weaknesses: formData.weaknesses.filter(
        (item) => item !== formData.subjects[index]
      ),
    });
  };

  return (
    <div className="step">

      <h2>Subjects</h2>

      <div className="subject-input">

        <input
          type="text"
          placeholder="Enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addSubject();
            }
          }}
        />

        <button onClick={addSubject}>
          Add
        </button>

      </div>

      <div className="chip-container">

        {formData.subjects.map((item, index) => (

          <div className="chip" key={index}>

            {item}

            <button
              onClick={() => removeSubject(index)}
            >
              ×
            </button>

          </div>

        ))}

      </div>
         <button onClick={prevStep}>
               Prev
          </button>
        <button onClick={nextStep}>
                Next →
            </button>
       
    </div>
  );
}