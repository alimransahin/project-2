import express from "express";
import { UserController } from "./user.controller";

import { studentValidations } from "../student/student.validation";
import validateRequest from "../middleware/validateRequest";

const router = express.Router();

// this call controller
router.post(
  "/create-student",
  validateRequest(studentValidations.createStudentValidationSchema),
  UserController.createUser
);
// router.get("/", studentController.getAllStudent);
// router.get("/:studentId", studentController.getSingleStudent);
// router.delete("/:studentId", studentController.deleteStudent);

export const UserRoutes = router;
