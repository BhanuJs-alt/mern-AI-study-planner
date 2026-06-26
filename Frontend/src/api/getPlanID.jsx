import api from "./axios";

const fetchPlan = async (id,setPlan) =>{
    try {
        const response = await api.get(`/plans/${id}`);
         setPlan(response.data) ;

    } catch (error) {
        console.log(error.message);
    }
   }

export default fetchPlan;