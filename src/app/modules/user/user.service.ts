import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.models";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = "student";
  userData.id = "2024232264";
  const newUser = await User.create(userData); //built in static method
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = Student.create(studentData);
    return newStudent;
  }
};

export const userService = { createStudentIntoDB };
