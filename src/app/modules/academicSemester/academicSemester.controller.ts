import sendResponse from "../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = req.body;
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester is created successfully",
    data: result,
  });
});

const getAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester fetches successfully",
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(
    req.params._id
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester fetches successfully",
    data: result,
  });
});
const updateSingleAcademicSemester = catchAsync(async (req, res) => {
  const result =
    await AcademicSemesterServices.UpdateSingleAcademicSemesterInDB(
      req.params._id,
      req.body
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester fetches successfully",
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAcademicSemester,
  getSingleAcademicSemester,
  updateSingleAcademicSemester,
};
