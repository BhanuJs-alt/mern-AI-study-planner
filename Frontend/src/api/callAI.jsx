import api from "./axios";

async function generateSchedule(id) {
    
     try {
          await api.post(`ai/generate-plan/${id}`);
           console.log("schedule created");
       } catch (error) {
        console.log(error.response?.data);
       }
      }
      
export default generateSchedule;