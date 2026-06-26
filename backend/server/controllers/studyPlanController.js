import studyPlan from "../models/studyPlan.js";
import User from "../models/User.js";

export  const getPlans = async (req,res)=>{

   try {
    const plans = await studyPlan.find( {
      user: req.user._id,
    });
    res.json(plans);
   } 
   catch (error) {
        res.status(500).json({
        message:error.message,
         });
   }
  }
 
export const getPlanById = async (req,res)=>{
       try {
         const { id } = req.params;

         const plan = await studyPlan.findById(id);

         if(!plan){
              return res.status(404).json({
              message: "Plan not found",
           });
         }
         if(plan.user.toString() !== req.user._id.toString()){
             return res.status(403).json({
             message: "Access denied",
           });
         }
         res.status(200).json(plan);

       } catch (error) {
            res.status(500).json({
            message:error.message,
         });
       }
  }
  
  export const createPlan = async (req,res) => {
    try {
        const { title ,examName,targetDate,studyHours,subjects,strengths,weaknesses,completedTopics,preferredTime } = req.body;

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
            subjects:subjects,
            strengths:strengths,
            weaknesses:weaknesses,
            completedTopics:completedTopics,
            preferredTime:preferredTime,
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

     if(updateplan.user.toString() !== req.user._id.toString()){
           return res.status(403).json({
           message: "Access denied",
        });
      }
    
     
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

    // if(deletedplan.user.toString() !== req.user._id.toString()){
    //        return res.status(403).json({
    //        message: "Access denied",
    //     });
    //   }
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