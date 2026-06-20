import mongoose from "mongoose";

const studyPlanSchema= new mongoose.Schema({
    title:{
        type:String
    },

    time:{
        type:String
    }
});

const studyPlan = mongoose.model("studyPlan",studyPlanSchema);

export default studyPlan;