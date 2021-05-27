import { Employee } from '../models/Employee';
import { DbConfig } from '../config/database';
import knex from "knex";
import { injectable } from 'inversify';
const db = knex(DbConfig);
@injectable()
export class EmployeeDao {
    async findAll(): Promise<Employee[]> {
        try {
            const employees: Employee[] = await db<Employee>('employees').select();
            return employees;
        } catch (error) {
            throw error;
        }

    }
    async find(limit: number, offset: number): Promise<Employee[]> {
        try {
            const employees: Employee[] = await db<Employee>('employees').select().limit(limit).offset(offset);
            return employees;
        } catch (error) {
            throw error;
        }
    }
    async findNames(id:number): Promise<Pick<Employee, "fname" | "lname">[]>{
        try {
            const data: Pick<Employee, "fname"|"lname">[] = await db<Employee>('employees').where({id:id}).select('fname').select('lname');
            return data;
        } catch (error) {
            throw error;
        }
    }

    async findById(id:number):Promise<Employee|undefined> {
        try {
         const employee: Employee | undefined = await db<Employee>('employees').where({id:id}).first();
         return employee;
        } catch (error) {
            throw error;
        }
    }
    async findByNameStartsWith(name:string):Promise<Employee[]> {
        try {
            const pattern:string=name+'%';
            const employees: Employee[]= await db<Employee>('employees').where('fname','like',pattern).select();
          return employees;
        } catch (error) {
            throw error;
        }
        
    }
    async save(employee:Employee):Promise<number> {
        try {
          const id:number = await db<Employee>('employees').insert(employee);
          return id;
        } catch (error) {
            throw error;
        }
    }

    async deleteById(id:number):Promise<number>{
         try {
        const deletedRows:number=  await db<Employee>('employees').where({id:id}).delete();
        return deletedRows;
         } catch (error) {
             throw error;
         }
    }

}
