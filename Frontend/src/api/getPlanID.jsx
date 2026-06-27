import api from "./axios";

const fetchPlan = async (id) =>{
    try {
        const response = await api.get(`/plans/${id}`);
         return response.data ;

    } catch (error) {
        console.log(error.message);
    }
   }

export default fetchPlan;