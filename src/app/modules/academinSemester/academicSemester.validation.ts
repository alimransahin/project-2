import { z } from "zod";

const CerateAcademicSemesterValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: "password must be string" })
    .max(20, { message: "Password cant be more than 20 Characters" }),
});
export const AcademicSemesterValidation = {
  CerateAcademicSemesterValidationSchema,
};
