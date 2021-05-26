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

}
