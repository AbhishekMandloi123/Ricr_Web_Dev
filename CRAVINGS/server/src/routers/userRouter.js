import express from "express";
import { UserUpdate } from "../controllers/userController.js";
import { Protect } from "../middlewares/authmiddleware.js";

const router = express.Router();

router.put("/update", Protect, UserUpdate);

export default router;