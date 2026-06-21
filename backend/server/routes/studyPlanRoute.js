import  express  from "express";
import { getPlans,createPlan, updatePlan, deletePlan } from "../controllers/studyPlanController.js";
import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

router.get("/",authMiddleware,getPlans);
router.post("/",authMiddleware,createPlan);
router.put("/:id",updatePlan);
router.delete("/:id",deletePlan);

export default router;