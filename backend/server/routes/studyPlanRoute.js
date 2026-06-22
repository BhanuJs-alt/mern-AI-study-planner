import  express  from "express";
import { getPlans,createPlan, updatePlan, deletePlan, getPlanById } from "../controllers/studyPlanController.js";
import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

router.get("/",authMiddleware,getPlans);
router.get("/:id",authMiddleware,getPlanById);
router.post("/",authMiddleware,createPlan);
router.put("/:id",authMiddleware,updatePlan);
router.delete("/:id",authMiddleware,deletePlan);

export default router;