import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import planRoutes from "./routes/studyPlanRoute.js"

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

app.use("/api/users",userRoute);
app.use("/api/plans",planRoutes);


const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});