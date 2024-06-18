import sentResponse from "../utils/sentResponse";
import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = req.body;
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body
  );
  console.log(result);
  sentResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester is created successfully",
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
};