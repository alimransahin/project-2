import express from "express";
import validateRequest from "../middleware/validateRequest";
import { AcademicFacultyValidation } from "./academicFaculty.validation";
import { academicFacultyControllers } from "./academicFaculty.controller";
const router = express.Router();
router.post(
  "/create-academic-faculty",
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema
  ),
  academicFacultyControllers.createAcademicFaculty
);
router.get(
  "/academicFacultyId",
  academicFacultyControllers.getSingleAcademicFaculty
);
router.patch(
  "/academicFacultyId",
  validateRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema
  ),
  academicFacultyControllers.updateAcademicFaculty
);
router.get("/", academicFacultyControllers.getAllAcademicFaculties);

export const AcademicFacultyRoutes = router;
