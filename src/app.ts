import express from "express"
import userRouter from "./user/infraestructure/routes/userRoute";

export const app = express();


app.use(userRouter);
