import { useState } from "react";
import api from "../api/axios";
import { useNavigate,Link } from "react-router-dom";
import '../styles/Login.css';

export default function Login() {
  const [formdata,setFormData]=useState(
    {
    email:"",
    password:"",
   }
  );

  function handleForm(e){
     setFormData({
      ...formdata,
      [e.target.name]:e.target.value
     });
  }
  const navigate = useNavigate();

  async function handleSubmit(e){
   e.preventDefault();

   try {
    const response =  await api.post(
       "auth/login",
        formdata
   );
   navigate("/dashboard");

   localStorage.setItem("token",response.data.token);

   console.log(`login success token is ${response.data.token}`);
   } catch (error) {
    console.log(error.message);
   }
  }
  
  return (
    <div className="login-container">
  <div className="login-card">
    <h1>Login</h1>

    <input
      name="email"
      type="email"
      value={formdata.email}
      onChange={handleForm}
      placeholder="Enter email"
    />

    <input
      name="password"
      type="password"
      value={formdata.password}
      onChange={handleForm}
      placeholder="Enter password"
    />

    <button
      type="submit"
      onClick={handleSubmit}
    >
      Login
    </button>

    <Link to="/register" className="register-link">
      New user? Register
    </Link>
  </div>
</div>
  );
}