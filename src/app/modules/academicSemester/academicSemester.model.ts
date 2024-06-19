import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import {
  Months,
  academicSemesterCode,
  academicSemesterName,
} from "./academicSemester.constant";

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: academicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  }
);

academicSemesterSchema.pre("save", async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error("This semester already exists");
  }
  next();
});
export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
