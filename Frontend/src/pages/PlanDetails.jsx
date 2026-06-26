import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import fetchPlan from "../api/getPlanID";

export default function PlanDetails(){
   const { id }  = useParams();
   const [plan,setPlan] = useState([]);

   
  useEffect(()=>{
      fetchPlan(id,setPlan);
  },[]);
    return(
        <>  
           <div>
                <pre>
                {JSON.stringify(
                    plan.generatedPlan,
                    null,
                    2
                )}
                </pre>
           </div>   
       </>
    );

}