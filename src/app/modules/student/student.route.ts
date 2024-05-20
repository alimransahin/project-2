import express from "express";
import { studentController } from "./student.controller";

const router = express.Router();

// this call controller
router.post("/create-student", studentController.createStudent);
router.get("/", studentController.getAllStudent);
router.get("/:studentId", studentController.getSingleStudent);

export const studentRoutes = router;
