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
  
  export const createPlan = async (req,res) => {
    try {
        const plans = await studyPlan.create({
            title:react,
            time :5
        });
        res.status(201).json(plan);
    } 
    
    catch (error) {
       console.log(error.message);   
    }
}