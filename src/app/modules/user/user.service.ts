import config from "../../config";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.models";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  //set student role
  userData.role = "student";

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester
  );
  if (!admissionSemester) {
    throw new Error("Admission semester not found");
  }
  //set  generated id
  userData.id = await generateStudentId(admissionSemester);

  const newUser = await User.create(userData); //built in static method
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;
    const newStudent = Student.create(payload);
    return newStudent;
  }
};

export const userService = { createStudentIntoDB };
