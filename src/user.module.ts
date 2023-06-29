import { TypeOrmModule } from "@nestjs/typeorm";
import { userEntity } from "./class/users";
import { Module } from '@nestjs/common';
import { userService } from "./user.service";
import { userController } from "./user.controller";


@Module({
    imports:[TypeOrmModule.forFeature([userEntity])],
    controllers:[userController],
    providers:[userService],
})

export class userModule{}