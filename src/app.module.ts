import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntity } from './class/users';
import { userModule } from './user.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port: 3306,
    username:"root",
    password:"Giriprasath@6",
    database:"giri",
    entities:[userEntity],
    synchronize:true,
  }),userModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
