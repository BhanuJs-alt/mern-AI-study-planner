import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import User from "./models/User.js";
import studyPlan from "./models/studyPlan.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Study Planner API Running",
  });
});


app.get("/health",(req,res)=>{
  res.json({
    status:"Health is ok",
  });
});

 app.get("/create-plan",async (req,res)=>{
      const user = await studyPlan.create({

       title:"Maths",
        time:"4 hours"
      });
      res.json(user);
 });

 app.get("/showPlan" ,async (req,res)=>{
  const study = await studyPlan.find();
  res.json(study);
});

 app.get("/users" ,async (req,res)=>{
    const users = await User.find();
    res.json(users);
 });

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});