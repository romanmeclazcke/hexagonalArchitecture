import { UserEntity } from "./user.entity";

export interface UserRepository{ //es una interface que define los metodos que se deberan
    //implementar en la aplicacion

    findUserbyId(id:String):Promise<UserEntity |null >
    registerUser(user:UserEntity):Promise<UserEntity | null >
    getUser():Promise<UserEntity[] | null>

    //son metodos a nivel de negocio, no importa la impelementacion
}