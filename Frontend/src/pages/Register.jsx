import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const [ formdata,setFormData ]=useState(
    {
    name:"",
    email:"",
    password:"",
   }
  );

  function handleForm(e){
    setFormData({
      ...formdata,
      [e.target.name]:e.target.value,
    });
  }
  const navigate = useNavigate();

 async function handleSubmit(e){
      e.preventDefault();
   try {
        await api.post(
          "auth/signup",
           formdata
        );
        navigate("/login");
        console.log("successfully signup!");
        
      } catch (error) {
        console.log(error.message);
      }
    }
  return(
    <div>
      <h1>Register</h1>

      <input  name="name"
      value={formdata.name}
      onChange={handleForm}  
      placeholder="Enter your name" 
      />

      <input name="email" 
      value={formdata.email}
      onChange={handleForm}
      placeholder="Enter your email" 
      />

      <input name="password"
      value={formdata.password}
      onChange={handleForm} 
      placeholder="Password" 
      />

      <button type="submit"
      onClick={handleSubmit}>
      Register
      </button>

    </div>
  );
}