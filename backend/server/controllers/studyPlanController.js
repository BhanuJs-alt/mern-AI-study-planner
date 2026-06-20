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
        const { title , time } = req.body;

        if (!title || !time) {
            return res.status(400).json({
              success: false,
              message: "All fields are required",
            });
          }

        const plans = await studyPlan.create({
            title: title,
            time :time 
        });
        
        res.status(201).json(plans);
    } 
    
    catch (error) {
       console.log(error.message);   
    }
}