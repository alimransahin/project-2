import { studentServices } from "./student.service";
import sendResponse from "../utils/sendResponse";
import httpStatus from "http-status";
import { RequestHandler } from "express";
import catchAsync from "../utils/catchAsync";

const getAllStudent = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student get successfully",
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.getSingleStudentsFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Student get successfully",
    data: result,
  });
});

const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.deleteStudentsFromDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is deleted successfully",
    data: result,
  });
});

export const studentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
