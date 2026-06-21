import mongoose from "mongoose";

const studyPlanSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    examName:{
        type:String,
        required:true
    },
    targetDate:{
        type:Date,
        required:true
    },
    studyHours:{
        type:Number,
        required:true
    },
    subject:{
        type:[String],
        required:true
    },
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

  },
    {
     timestamps:true
   }
);

const studyPlan = mongoose.model("studyPlan",studyPlanSchema);

export default studyPlan;