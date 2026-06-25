import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function CreatePlan() {
  const navigate = useNavigate();

  const [planData,setPlanData]=useState({
  title: "",
  examName: "",
  targetDate: "",
  studyHours: "",
  subjects:[''],
  });

  const handleForm = (e)=>{
    setPlanData({
      ...planData,
      [e.target.name]:e.target.value
    });
  }
  console.log(planData);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await api.post(
      "/plans",
      planData
     );
      navigate("/dashboard");
      console.log(response.data);

    } catch (error) {
      console.log(error.response?.data);
    }
  }

  return (
    <>
      <h1>Create Plan</h1>
       <input 
        name="title"
        value={planData.title}  
        onChange={handleForm}
        placeholder="Enter title"
      />
      <input 
        name="examName"
        value={planData.examName}  
        onChange={handleForm}
        placeholder="Enter exam name"
      />
      <input 
        name="studyHours"
        value={planData.studyHours}  
        onChange={handleForm}
        placeholder="Enter study hours"
      />
      <input 
        name="subjects"
        value={planData.subjects}  
        onChange={handleForm}
        placeholder="Enter subjects"
      />
      <input 
        name="targetDate"
        value={planData.targetDate}  
        onChange={handleForm}
        placeholder="Enter target Date"
      />
      <button 
        type="submit"
        onClick={handleSubmit}>
        Create-plan
      </button>
    </>
  );
}