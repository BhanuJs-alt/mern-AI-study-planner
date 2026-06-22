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
    subjects:{
        type:[String],
        required:true
    },
     strengths:{
        type:[String],
        default:[]
    },
     weaknesses:{
        type:[String],
        default:[]
    },
     completedTopics:{
        type:[String],
        default:[]
    },
     preferredTime:{
        type:[String],
        default:[]
    },
    generatedPlan:{
        type:Object,
        default:{}
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