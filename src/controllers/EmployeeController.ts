import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/EmployeeService';
import TYPES from '../types/DependencyInjectorSymbols/symbols';
@injectable()
export class EmployeeController {
    private employeeService: EmployeeService;
    constructor(@inject(TYPES.EmployeeService) employeeService: EmployeeService) {
        this.employeeService = employeeService;
        this.find = this.find.bind(this);
        this.findAll = this.findAll.bind(this);
    }
    async findAll(request: Request, response: Response): Promise<Employee[] | Response> {
        try {
            const employees: Employee[] = await this.employeeService.findAll();
            return response.status(200).json(employees);
        } catch (error) {
            console.log(error);
            return response.status(500).json(error.message);
        }

    }
    async find(request: Request, response: Response): Promise<Employee[] | Response> {
        try {
            const employees: Employee[] = await this.employeeService.find(parseInt(request.params.pageNo), parseInt(request.params.limit));
            return response.status(200).json(employees);
        } catch (error) {
            console.log(error);
            return response.status(500).json(error.message);
        }

    }
}