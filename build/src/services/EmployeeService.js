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
exports.EmployeeService = void 0;
const EmployeeDao_1 = require("../dao/EmployeeDao");
class EmployeeService {
    constructor() {
        this.employeeDao = new EmployeeDao_1.EmployeeDao();
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employees = yield this.employeeDao.findAll();
                return employees;
            }
            catch (error) {
                throw error;
            }
        });
    }
    find(pageNo, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const offset = (pageNo - 1) * limit;
                const employees = yield this.employeeDao.find(limit, offset);
                return employees;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.EmployeeService = EmployeeService;
