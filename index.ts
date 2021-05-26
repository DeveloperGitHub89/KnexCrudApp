import 'reflect-metadata';
import express from 'express';
import employeeRouter from './src/routes/employeeroutes';
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
const PORT = 8000;
server.use('/api/employees', employeeRouter);
server.get('/', (req, res) => res.send('Express + TypeScript Server'));
server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
