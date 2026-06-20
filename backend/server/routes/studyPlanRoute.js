import  express  from "express";
import { getPlans } from "../controllers/studyPlanController.js";
import { createPlan } from "../controllers/studyPlanController.js";

const router = express.Router();

router.get("/",getPlans)
router.post("/",createPlan)

export default router;