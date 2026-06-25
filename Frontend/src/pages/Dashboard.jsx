 import { useNavigate,Link } from "react-router-dom";
 import { useState,useEffect } from "react";
 import api from "../api/axios";
 

export default function Dashboard() {
  const [plans,setPlans] = useState([]);

  const fetchPlans = async () =>{

    const response = await api.get("/plans");
    setPlans(response.data);
  }
  
  useEffect(()=>{
      fetchPlans();
  },[]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
   
  {
    plans.map((plan)=>(
      <Link  
      to={`/plans/${plan._id}`}
      key={plan._id}>
       <div>
          <h3>{plan.title}</h3>
          <p>{plan.examName}</p>
        </div>
      </Link>

      ))}
  
      <button onClick={()=>navigate("/plans/new")}>
        Create New Plan
      </button>
    <div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  </>
  );
}
