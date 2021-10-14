import express, { Application } from "express";

const app: Application = express();
//Routes
import peopleroutes from "./routes/peopleroutes";

//bodyparser
app.use(express.urlencoded({ extended: false }));
//  json parser
app.use(express.json());

app.use("/api/people", peopleroutes);

app.listen(5000, () => console.log("Server Running"));
