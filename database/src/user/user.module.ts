import { Photo } from './entities/photo.entity';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';



@Module({
  controllers: [
    UserController
  ],
  providers: [
    UserService
  ],
  imports: [
    TypeOrmModule.forFeature([
      User,
      Photo
    ])
  ],
  exports: [TypeOrmModule]

})
export class UserModule { }
