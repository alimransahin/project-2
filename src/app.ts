import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/modules/middleware/globalErrorHandler";
import notFound from "./app/modules/middleware/notFound";
import router from "./app/routes";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application router
app.use("/api/v1/", router);

const test = (req: Request, res: Response) => {
  const s = "Hello World!";
  res.send(s);
};
app.get("/", test);
app.use(globalErrorHandler);
app.use(notFound);

export default app;
