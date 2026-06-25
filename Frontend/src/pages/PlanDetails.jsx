import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import api from "../api/axios";


export default function PlanDetails(){
    const { id } = useParams();
    const [plan,setPlan] = useState({

    });
    
    
    const fetchPlans = async () =>  {
        try {
          
           const response = await api.get(`/plans/${id}`);

           setPlan(response.data);
           console.log(response.data);
        } catch (error) {
            console.log(error.response?.data);
        }
    }

    useEffect(()=>{
        fetchPlans();
    },[]);

     if (!plan) {
        return <h1>Loading...</h1>;
      }

    return(
           <div>
                <h1>{plan.title}</h1>

                <p>{plan.examName}</p>

                <p>{plan.studyHours}</p>

                <p>
                {plan.subjects?.join(", ")}
                </p>
           </div>

    );

}