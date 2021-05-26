"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeroutes_1 = __importDefault(require("./src/routes/employeeroutes"));
const server = express_1.default();
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
const PORT = 9000;
server.use('/api/employees', employeeroutes_1.default);
server.get('/', (req, res) => res.send('Express + TypeScript Server'));
server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
