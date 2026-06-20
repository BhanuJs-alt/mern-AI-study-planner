import studyPlan from "../models/studyPlan.js";

export  const getPlans = async (req,res)=>{

   try {
    const plans = await studyPlan.find();
    res.json(plans);
   } 
   catch (error) {
     console.log(error.message);
   }
  }
  