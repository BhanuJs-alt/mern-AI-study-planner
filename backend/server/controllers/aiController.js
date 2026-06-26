import  { generateStudySchedule } from "../services/aiServices.js";
import studyPlan from "../models/studyPlan.js";

export const generatePlan = async (req,res) =>{
    try {
        const { id } = req.params;

        const plan = await studyPlan.findById(id);
        console.log("Plan:", plan);
        console.log("generatedPlan:", plan.generatedPlan);
        console.log("Type:", typeof plan.generatedPlan);
        console.log("Is Array:", Array.isArray(plan.generatedPlan));
        console.log("Length:", plan.generatedPlan?.length);
        if(!plan){
            res.status(404).json({
                message:"Plan not found",
            });
        }

        if (plan.user.toString() !==req.user._id.toString()) {
            
            return res.status(403).json({
            message: "Access denied",

            });
        }
        
        if (!plan.generatedPlan || plan.generatedPlan.length === 0) {
           const result = await generateStudySchedule(plan);

           plan.generatedPlan = result;

           await plan.save();
           res.status(200).json({
           aiResponse:result,
          });
        }

        return res.status(400).json({
        message: "Schedule already generated"
      });

    } catch (error) {
        res.status(500).json({
            message:error.message,
        });
    }
}