import { EmployeeController } from "../controllers/EmployeeController";
import { Router } from "express";
import container from "../config/inversify.config";
const employeeRouter = Router();
const employeeController: EmployeeController = container.resolve<EmployeeController>(EmployeeController);
employeeRouter.get('/', employeeController.findAll);
employeeRouter.get('/page/:pageNo/limit/:limit', employeeController.find);
export default employeeRouter;