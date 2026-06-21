import  express  from "express";
import { getPlans,createPlan, updatePlan, deletePlan } from "../controllers/studyPlanController.js";

const router = express.Router();

router.get("/get",getPlans);
router.post("/create",createPlan);
router.put("/:id",updatePlan);
router.delete("/:id",deletePlan);

export default router;