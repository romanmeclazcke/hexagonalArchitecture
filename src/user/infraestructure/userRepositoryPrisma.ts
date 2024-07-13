import { prisma } from "../../../prisma";
import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository";


export class UserRepositoryPrisma implements UserRepository{ // implemento el user repository, por ende necesito definir los metodos que esta tiene
     
    findUserbyId= async (id: String): Promise<UserEntity | null> =>{
    return await prisma.user.findUnique({
        where: { id: id }
    })        
    }

    registerUser = async  (user: UserEntity): Promise<UserEntity | null> =>{
        return await prisma.user.create({
            data:user
        })
    }

    getUser= async () : Promise<UserEntity[] | null> => {
       return await prisma.user.findMany();
    }
    
}