"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
database_1.default.sync();
console.log('Database rodando na porta 3306');
app_1.default.listen(3001);
console.log('Server rodando na porta 3001');
