import { Request, Response } from "express";
import { studentServices } from "./student.service";
import studentValidationSchema from "./student.joi.validation";
// import studentValidationSchema from "./student.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    // validation schema

    const { student: studentData } = req.body;
    const { error, value } = studentValidationSchema.validate(studentData);
    const result = await studentServices.createStudentIntoDB(value);
    if (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.details,
      });
    }
    // console.log({ error }, { value });
    // will call service

    //   response
    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Student get successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Single Student get successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
