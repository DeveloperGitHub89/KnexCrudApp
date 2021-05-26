"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const EmployeeService_1 = require("../services/EmployeeService");
class EmployeeController {
    constructor() {
        this.employeeService = new EmployeeService_1.EmployeeService();
        this.find = this.find.bind(this);
        this.findAll = this.findAll.bind(this);
    }
    findAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employees = yield this.employeeService.findAll();
                return response.status(200).json(employees);
            }
            catch (error) {
                console.log(error);
                return response.status(500).json(error.message);
            }
        });
    }
    find(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employees = yield this.employeeService.find(parseInt(request.params.pageNo), parseInt(request.params.limit));
                return response.status(200).json(employees);
            }
            catch (error) {
                console.log(error);
                return response.status(500).json(error.message);
            }
        });
    }
}
exports.EmployeeController = EmployeeController;
