import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import { academicFacultyServices } from "./academicFaculty.service";
import sendResponse from "../utils/sendResponse";

const createAcademicFaculty = catchAsync(async (req, res) => {
  console.log(req);
  const result = await academicFacultyServices.createAcademicFacultyIntoDB(
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty is created successfully",
    data: result,
  });
});
const getAllAcademicFaculties = catchAsync(async (req, res) => {
  const result = await academicFacultyServices.getAllAcademicFacultiesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculties are retrieved successfully",
    data: result,
  });
});
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { academicFacultyId } = req.params;
  const result =
    await academicFacultyServices.getSingleAcademicFacultyFromDB(
      academicFacultyId
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty is retrieved successfully",
    data: result,
  });
});
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { academicFacultyId } = req.params;
  const result = await academicFacultyServices.updateAcademicFacultyIntoDB(
    academicFacultyId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty is update successfully",
    data: result,
  });
});

export const academicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
