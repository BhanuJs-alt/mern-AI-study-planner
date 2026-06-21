import studyPlan from "../models/studyPlan.js";

export  const getPlans = async (req,res)=>{

   try {
    const plans = await studyPlan.find( {
      user: req.user._id,
    });
    res.json(plans);
   } 
   catch (error) {
     console.log(error.message);
   }
  }
  
  export const createPlan = async (req,res) => {
    try {
        const { title ,examName,targetDate,studyHours,subject } = req.body;

        if (!title || !examName) {
            return res.status(400).json({
              success: false,
              message: "All fields are required",
            });
          }

        const plans = await studyPlan.create({
            title: title,
            examName:examName,
            targetDate:targetDate,
            studyHours:studyHours,
            subject:subject,
            user:req.user._id
        });
        
        res.status(201).json({
          message:"plan successfully created",
        });
    } 
    
    catch (error) {
      res.status(500).json({
        message:error.message,
      });
    }
}

export const updatePlan = async(req,res) =>{
  try {
     const { id } = req.params;

    const updatedplan = await studyPlan.findByIdAndUpdate(
      id,
      req.body,
      { new:true }
     );
     
     res.json({
      message:"updated",
      updatedplan
     });

  } catch (error) {
    res.status(500).json({
      message:error.message,
   });
 }
} 

export const deletePlan = async(req,res) =>{
  try {
    const { id } = req.params;

   const deletedPlan = await studyPlan.findByIdAndDelete(id);

    res.status(200).json({
      message:"Plan deleted",
      deletedPlan
    });

  } catch (error) {
    res.status(500).json({
      message:error.message,
  });
  }
}