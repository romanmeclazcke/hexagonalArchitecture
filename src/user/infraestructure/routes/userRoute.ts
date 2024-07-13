import { Router, Request,Response } from "express";
import { UserRepositoryPrisma } from "../repository/userRepositoryPrisma";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/userController";

const userRouter= Router();
const path ="/user"

const prismaUserRepository = new UserRepositoryPrisma();

const userUseCase = new UserUseCase(prismaUserRepository);

const userController = new UserController(userUseCase);


userRouter.get(`${path}/all`,(req:Request,res:Response) => {
    userController.getUser(req,res);
 });
 
 userRouter.get(`${path}/:id`,(req:Request,res:Response) => {
    userController.getUserbyId(req,res);
 });

 userRouter.put(`${path}/new`,(req:Request,res:Response) => {
    userController.createUser(req,res);
 });



export default userRouter;