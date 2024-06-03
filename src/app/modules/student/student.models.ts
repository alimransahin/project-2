import { Schema, model } from "mongoose";
import {
  TGuardian,
  TStudent,
  // StudentMethod,
  TUserName,
  StudentModel,
} from "./student.interface";

// import validator from "validator";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First name is required."],
    trim: true,
    maxlength: [20, "First name cannot be more than 20"],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required."],
    maxlength: [20, "Last name cannot be more than 20"],
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required."],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required."],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required."],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required."],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required."],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required."],
  },
});

const localGuardianSchema = new Schema({
  name: {
    type: String,
    required: [true, "Local guardian's name is required."],
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required."],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required."],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required."],
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "Student ID is required."],
      unique: true,
      ref: "User",
    },
    name: {
      type: userNameSchema,
      required: [true, "Student's name is required."],
    },
    gender: {
      type: String,
      enum: {
        values: ["Male", "Female"],
        message: "{VALUE} is not a valid gender.",
      },
      required: [true, "Gender is required."],
    },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      // validate: {
      //   validator: (value: string) => validator.isEmail(value),
      //   message: `{VALUE} is not a valid email type`,
      // },
    },
    contactNo: {
      type: String,
      required: [true, "Contact number is required."],
    },
    emergencyContactNo: {
      type: String,
      required: [true, "Emergency contact number is required."],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        message: "{VALUE} is not a valid blood group.",
      },
    },
    presentAddress: {
      type: String,
      required: [true, "Present address is required."],
    },
    permanentAddress: {
      type: String,
      required: [true, "Permanent address is required."],
    },
    guardian: {
      type: guardianSchema,
      required: [true, "Guardian information is required."],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, "Local guardian information is required."],
    },
    profileImg: {
      type: String,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// virtual
studentSchema.virtual("fullName").get(function () {
  return (
    this.name.firstName + " " + this.name.middleName + " " + this.name.lastName
  );
});

// query middleware
studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});
// creating static
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>("Student", studentSchema);
