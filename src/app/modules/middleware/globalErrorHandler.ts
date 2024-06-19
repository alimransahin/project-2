import { Request, Response } from "express";

const globalErrorHandler = (err: any, req: Request, res: Response) => {
  const statusCode = 500;
  const message = err.message || "Something Went Wrong";
  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
