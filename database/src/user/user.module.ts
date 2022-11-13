import { Photo } from './entities/photo.entity';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';



@Module({
  controllers: [
    UserController,
    PhotoController
  ],
  providers: [
    UserService,
    PhotoService
  ],
  imports: [
    TypeOrmModule.forFeature([  
      User,
      Photo
    ])
    // NOTE - Using the @meth forFeature to register the enities (User, Photo) in the userModule so we can have acces to the correspondig repositoriesF
  ],
  exports: [TypeOrmModule]

})
export class UserModule { }
