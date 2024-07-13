import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";

export class UserController {
  constructor(private userUsecase: UserUseCase) {}
  
  public getUser = async (req:Request,res:Response)=>{
    const users =  await this.userUsecase.getUser();
    res.send(users);
  } 


  
  
  public getUserbyId = async (req:Request,res:Response)=>{
    const {id} = req.params;
    const user=  await this.userUsecase.getUserById(id);
    res.send(user);
  }
  
  public createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const user =  await this.userUsecase.registerUser(name, email, password);
    res.send(user);
  };
}
