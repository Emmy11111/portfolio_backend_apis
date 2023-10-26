import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import cors from "cors";
import MessageRoutes from "./routes/message"

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({ origin: "*" }))
app.use("/api/v1/messages", MessageRoutes)

app.get("/", (req:Request,res:Response) => {
    res.send("portfolio apis");
})

app.listen(port, () => {
    console.log(`server started on ${port}`)
});