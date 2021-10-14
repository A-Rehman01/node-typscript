"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//Routes
const peopleroutes_1 = __importDefault(require("./routes/peopleroutes"));
//bodyparser
app.use(express_1.default.urlencoded({ extended: false }));
//  json parser
app.use(express_1.default.json());
app.use("/api/people", peopleroutes_1.default);
app.listen(5000, () => console.log("Server Running"));
