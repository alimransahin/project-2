import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { studentRoutes } from "../modules/student/student.route";
import { academicSemesterRoutes } from "../modules/academinSemester/academicSemester.route";

const router = Router();
const moduleRoutes = [
  { path: "/users", route: UserRoutes },
  { path: "/academic-semester", route: academicSemesterRoutes },
  { path: "/students", route: studentRoutes },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
