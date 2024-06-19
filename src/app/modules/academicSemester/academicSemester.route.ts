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

router.get("/", AcademicSemesterControllers.getAcademicSemester);

router.get(
  "/:academicSemester_id",
  AcademicSemesterControllers.getSingleAcademicSemester
);
router.patch(
  "/:academicSemester_id",
  validateRequest(
    AcademicSemesterValidation.UpdateAcademicSemesterValidationSchema
  ),
  AcademicSemesterControllers.updateSingleAcademicSemester
);

export const academicSemesterRoutes = router;
