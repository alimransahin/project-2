import express from "express";
import { AcademicSemesterControllers } from "./academicSemester.controller";
import validateRequest from "../middleware/validateRequest";
import { AcademicSemesterValidation } from "./academicSemester.validation";

const router = express.Router();
router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemesterValidation.CerateAcademicSemesterValidationSchema
  ),
  AcademicSemesterControllers.createAcademicSemester
);

// this call controller

// router.get("/", studentController.getAllStudent);
// router.get("/:studentId", studentController.getSingleStudent);
// router.delete("/:studentId", studentController.deleteStudent);

export const academicSemesterRoutes = router;
