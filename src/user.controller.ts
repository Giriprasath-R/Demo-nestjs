import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { userService } from "./user.service";
import { userEntity } from "./class/users";


@Controller('user')
export class userController{
    constructor(private userService:userService){}

    @Get()
    async findAll(){
        const reponse = await this.userService.findAll();
        return reponse;
    }
    @Get(":id")
    async findOne(@Param('id') id:number){
        const response = await this.userService.findOne(id);
        return response;
    }
    @Post()
    async create(@Body() createUserDto:userEntity){
        const response = await this.userService.create(createUserDto);
        return "Hi "+createUserDto.name+". your details inserted successfully";
    }
    @Put(":id")
    async update(@Param() id:number, @Body() createUserDto:userEntity){
        const response = await this.userService.update(id,createUserDto);
        return "Hi "+createUserDto.name+". your document is updated";
    }
    @Delete(":id")
    async delete(@Param() id:number){
        const response = await this.userService.remove(id);
        return response;
    }
}