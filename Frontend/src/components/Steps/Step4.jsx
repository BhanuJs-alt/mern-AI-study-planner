import '../../styles/Step4.css';
import { useNavigate } from 'react-router-dom'
import api from '../../api/axios';

export default function StepFour({ formData,prevStep }) {
    const navigate = useNavigate();
    
    const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      console.log(formData);
      const response = await api.post(
      "/plans",
      formData
     );
      navigate("/dashboard");
      console.log(response.data);

    } catch (error) {
      console.log(error.response?.data);
    }
  }


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
            <button onClick={handleSubmit}>Submit</button>
        </div>

    );

}