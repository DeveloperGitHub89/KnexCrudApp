"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeController_1 = require("../controllers/EmployeeController");
const express_1 = require("express");
const employeeRouter = express_1.Router();
const employeeController = new EmployeeController_1.EmployeeController();
employeeRouter.get('/', employeeController.findAll);
employeeRouter.get('/page/:pageNo/limit/:limit', employeeController.find);
exports.default = employeeRouter;
