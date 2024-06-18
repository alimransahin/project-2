import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { academicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payLoad: TAcademicSemester) => {
  console.log(payLoad);

  if (academicSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error("Invalid Semester Code");
  }
  const result = await academicSemester.create(payLoad);
  return result;
};
export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
