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
    async findNames(id:number): Promise<Pick<Employee, "fname" | "lname">[]>{
        try {
            const data: Pick<Employee, "fname" | "lname">[]=await this.employeeDao.findNames(id);
            return data;
        } catch (error) {
           throw error; 
        }
    }
    async findById(id:number): Promise<Employee|undefined>{
        try {
          const data:Employee|undefined = await this.employeeDao.findById(id); 
          return data; 
        } catch (error) {
            throw error;
        }
    }
    async findByNameStartsWith(name:string): Promise<Employee[]>{
        try {
           const employees:Employee[] = await this.employeeDao.findByNameStartsWith(name);
           return employees;
        } catch (error) {
             throw error;
        }
    }
    async save(employee:Employee): Promise<any>{
       try {
           const currentDateTime:Date=new Date();
           employee.createdAt=currentDateTime;
           employee.updatedAt=currentDateTime;
           const id:number = await this.employeeDao.save(employee);
           return id;
       } catch (error) {
           throw error;
       }
    }
    async deleteById(id:number): Promise<any>{
        try {
           return await this.employeeDao.deleteById(id);
        } catch (error) {
            throw error;
        }
    }

}
