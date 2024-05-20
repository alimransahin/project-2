import cors from "cors";
import express, { Application, Request, Response } from "express";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors);

app.get("/", (req: Request, res: Response) => {
  const s = "Hello World!";
  res.send(s);
});

export default app;