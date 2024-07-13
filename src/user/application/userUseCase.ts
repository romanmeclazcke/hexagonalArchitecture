import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {

    constructor(private readonly UserRepository:UserRepository){} //inyeccion de las dependecias

    //casos de uso de la apli-caion (Funciones de la app) => Logica de negocio
    public async registerUser(name:string,email:string,edad:number){
        const user  = await this.UserRepository.registerUser(new UserValue(name,email,edad));//paso una instanciua de la estructura de user
        return user;
    }


    public async getUserById(id:String){
        const user = await this.UserRepository.findUserbyId(id);
        return user;
    }

    public async getUser(){
        const user = await this.UserRepository.getUser();
        return user;
    }


}