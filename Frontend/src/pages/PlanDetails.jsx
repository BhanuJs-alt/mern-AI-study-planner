import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import fetchPlan from "../api/getPlanID";
import DayCard from "../components/DayCard";
import '../styles/PlanDetails.css';


export default function PlanDetails(){
   const { id }  = useParams();
   const [plan,setPlan] = useState({});
    
    console.log("Current id:", id);
   
    useEffect(() => {
            console.log("Fetching:", id);
            async function loadPlan() {
            const data = await fetchPlan(id);
            setPlan(data);
        }

    loadPlan();
    }, [id]);

    useEffect(() => {
    console.log(plan);
    }, [plan]);
    return(
    <>  
        <div className="schedule-page">

            <div className="hero">

                <h1>{plan?.generatedPlan?.exam}</h1>

                <div className="hero-info">

                    <div>
                        <h3>Target Date</h3>
                        <p>{plan?.generatedPlan?.target_date}</p>
                    </div>

                    <div>
                        <h3>Study Hours</h3>
                        <p>{plan?.generatedPlan?.study_hours_per_day} hrs/day</p>
                    </div>
                </div>
            </div>

        {plan?.generatedPlan?.schedule?.map((day,index)=>(
            <DayCard
                key={index}
                day={day}
                number={index+1}
            />
        ))}

     </div> 
 
    </>
    );

}