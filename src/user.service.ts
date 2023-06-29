import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { userEntity } from "./class/users";
@Injectable()
export class userService {
    constructor(
        @InjectRepository(userEntity)
        private userRepository: Repository<userEntity>,
    ) { }
    findAll(): Promise<userEntity[]> {
        return this.userRepository.find();
    }
    findOne(id: number): Promise<userEntity> {
        return this.userRepository.findOneBy({ id: id })
    }
    create(user: userEntity): Promise<userEntity> {
        return this.userRepository.save(user);
    }
    async update(id:number,user:userEntity){
        await this.userRepository.update(id,user);
    }
    async remove(id:number):Promise<void>{
        await this.userRepository.delete(id);
    }
}


