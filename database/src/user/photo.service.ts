import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotoService {

    constructor(private dataSource: DataSource, @InjectRepository(Photo) private photoRepo: Repository<Photo>) { }

    createPhoto(photo: Photo) {
        return this.photoRepo.save(photo);
    }

    findAll() {
        return this.photoRepo.find({
            /** NOTE - with the property relations, we can specify a set of lazy properties to be loaded that normally won't be 
            In our case, we cant the asociated user to each photo */
            relations: {
                user: true,
            },
        })

    }

    async pushPhoto(userId: number, photo: Photo) {

        await this.dataSource.manager.save(photo);  // saving the given photo
    }

}
