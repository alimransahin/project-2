import { userService } from "./user.service";
import sentResponse from "../utils/sentResponse";
import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";

const createUser = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await userService.createStudentIntoDB(password, studentData);

  sentResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is created successfully",
    data: result,
  });
});

export const UserController = {
  createUser,
};
