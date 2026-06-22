import express from 'express';
import authMiddleware from '../middleware/authmiddleware.js';
import { generatePlan } from '../controllers/aiController.js';

const router = express.Router();

router.post("/generate-plan/:id",authMiddleware,generatePlan);

export default router;