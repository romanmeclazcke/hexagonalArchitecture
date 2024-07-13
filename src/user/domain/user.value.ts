//clase que se encarga de mapear los datos de la representacion de la entidad
import {v4 as uuid} from "uuid"
import { UserEntity } from "./user.entity";

//funciona como dto => data tranfer object
export class UserValue implements UserEntity {
    id: String;
    name: String;
    email: String;
    edad: number;


    constructor(name:string, email:string, edad:number){
        this.id= uuid();
        this.name=name;
        this.email=email;
        this.edad=edad;
    }
}