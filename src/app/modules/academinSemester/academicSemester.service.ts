import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { academicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payLoad: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error("Invalid Semester Code");
  }
  const result = await academicSemester.create(payLoad);
  return result;
};
const getAllAcademicSemesterFromDB = async () => {
  const result = await academicSemester.find();
  return result;
};
const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await academicSemester.findOne({ id });
  return result;
};
const UpdateSingleAcademicSemesterInDB = async (id: string) => {
  const result = await academicSemester.findOne({ id });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
};
