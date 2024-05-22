import Joi from "joi";

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .max(20)
    .required()
    .trim()
    .regex(/^[A-Z][a-zA-Z]*$/, "capitalized")
    .messages({
      "string.empty": "First name is required.",
      "string.max": "First name cannot be more than 20 characters.",
      "string.pattern.name": "{#label} must be capitalized.",
    }),
  middleName: Joi.string().allow("", null),
  lastName: Joi.string()
    .max(20)
    .required()
    .regex(/^[a-zA-Z]*$/, "alpha")
    .messages({
      "string.empty": "Last name is required.",
      "string.max": "Last name cannot be more than 20 characters.",
      "string.pattern.name":
        "{#label} must contain only alphabetic characters.",
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    "string.empty": "Father's name is required.",
  }),
  fatherOccupation: Joi.string().required().messages({
    "string.empty": "Father's occupation is required.",
  }),
  fatherContactNo: Joi.string().required().messages({
    "string.empty": "Father's contact number is required.",
  }),
  motherName: Joi.string().required().messages({
    "string.empty": "Mother's name is required.",
  }),
  motherOccupation: Joi.string().required().messages({
    "string.empty": "Mother's occupation is required.",
  }),
  motherContactNo: Joi.string().required().messages({
    "string.empty": "Mother's contact number is required.",
  }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Local guardian's name is required.",
  }),
  occupation: Joi.string().required().messages({
    "string.empty": "Local guardian's occupation is required.",
  }),
  contactNo: Joi.string().required().messages({
    "string.empty": "Local guardian's contact number is required.",
  }),
  address: Joi.string().required().messages({
    "string.empty": "Local guardian's address is required.",
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    "string.empty": "Student ID is required.",
  }),
  name: userNameValidationSchema.required().messages({
    "any.required": "Student's name is required.",
  }),
  gender: Joi.string().valid("Male", "Female").required().messages({
    "any.only": "{#value} is not a valid gender.",
    "any.required": "Gender is required.",
  }),
  dateOfBirth: Joi.string().isoDate(),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required.",
    "string.email": "{#value} is not a valid email type.",
  }),
  contactNo: Joi.string().required().messages({
    "string.empty": "Contact number is required.",
  }),
  emergencyContactNo: Joi.string().required().messages({
    "string.empty": "Emergency contact number is required.",
  }),
  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-")
    .messages({
      "any.only": "{#value} is not a valid blood group.",
    }),
  presentAddress: Joi.string().required().messages({
    "string.empty": "Present address is required.",
  }),
  permanentAddress: Joi.string().required().messages({
    "string.empty": "Permanent address is required.",
  }),
  guardian: guardianValidationSchema.required().messages({
    "any.required": "Guardian information is required.",
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    "any.required": "Local guardian information is required.",
  }),
  profileImg: Joi.string(),
  isActive: Joi.string().valid("active", "blocked").default("active").messages({
    "any.only": "{#value} is not a valid status.",
  }),
});

export default studentValidationSchema;
