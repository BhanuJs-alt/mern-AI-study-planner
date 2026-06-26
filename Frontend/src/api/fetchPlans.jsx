import api from "./axios";

const fetchPlans = async (setPlans) =>{

    const response = await api.get("/plans");
    setPlans(response.data);
  }

  export default fetchPlans;
  