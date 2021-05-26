import { Container } from 'inversify';
import { EmployeeDao } from '../dao/EmployeeDao';
import { EmployeeService } from '../services/EmployeeService';
import TYPES from '../types/DependencyInjectorSymbols/symbols';
const container: Container = new Container();
container.bind<EmployeeService>(TYPES.EmployeeService).to(EmployeeService).inSingletonScope();
container.bind<EmployeeDao>(TYPES.EmployeeDao).to(EmployeeDao).inSingletonScope();
export default container;