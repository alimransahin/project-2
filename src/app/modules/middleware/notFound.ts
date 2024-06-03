import { NextFunction, Request, Response } from "express";
import httpStatus, { NOT_FOUND } from "http-status";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API not found",
    error: "",
  });
};
export default notFound;
