import { z } from "zod";
import {
  Months,
  academicSemesterCode,
  academicSemesterName,
} from "./academicSemester.constant";

const CerateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemesterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});
export const AcademicSemesterValidation = {
  CerateAcademicSemesterValidationSchema,
};
