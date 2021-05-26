import { inject, injectable } from "inversify";
import { EmployeeDao } from "../dao/EmployeeDao";
import { Employee } from "../models/Employee";
import TYPES from "../types/DependencyInjectorSymbols/symbols";

@injectable()
export class EmployeeService {
    private employeeDao: EmployeeDao;
    constructor(@inject(TYPES.EmployeeDao) employeeDao: EmployeeDao) {
        this.employeeDao = employeeDao;
    }
    async findAll(): Promise<Employee[]> {
        try {
            const employees: Employee[] = await this.employeeDao.findAll();
            return employees;
        } catch (error) {
            throw error;
        }
    }
    async find(pageNo: number, limit: number): Promise<Employee[]> {
        try {
            const offset: number = (pageNo - 1) * limit;
            const employees: Employee[] = await this.employeeDao.find(limit, offset);
            return employees;
        } catch (error) {
            throw error;
        }
    }
}
