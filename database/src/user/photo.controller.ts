import { UserService } from './user.service';
import { Photo } from './entities/photo.entity';
import { PhotoService } from './photo.service';
import { Body, Controller, Param, Post } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';

@Controller('photo')
export class PhotoController {

    @Inject()
    private photoServ: PhotoService;

    
    @Inject()
    private userServ: UserService;

    @Get()
    listPhotos() {
        return this.photoServ.findAll();
    }

    @Post(":userId")
    createPhoto(@Param("userId") userId: number, @Body() photo: Photo) {
        this.userServ.pushPhoto(userId, photo);
    }

}
