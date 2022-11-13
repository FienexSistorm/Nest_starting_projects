import { CreatePhotoDto } from './photo-dto/create-photo.dto';
import { PhotoService } from './photo.service';
import { Photo } from './entities/photo.entity';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class UserService {


  // Injecting the Repository of the Entity User
  constructor(@InjectRepository(User) private userRepo: Repository<User>, @InjectRepository(Photo) private photoRepo: Repository<Photo>, private dataSource: DataSource) { }


  // List All Users
  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  // Create a new User
  create(createUserDto: CreateUserDto) {
    let photos = createUserDto.photos;
    if (photos) {
      console.log("the user's photos ", JSON.stringify(photos))
    }
    this.userRepo.save(createUserDto);
  }

  // Return th user of the given id
  findOne(id: number): Promise<User> {
    return this.userRepo.findOneBy({ id })
  }

  // Update a user
  update(updateUserDto: UpdateUserDto) {
    return this.userRepo.update(updateUserDto.id, updateUserDto);  // It does not return the new version of the object
  }

  // Delete a user
  async remove(id: number) {
    return this.userRepo.delete(id);// It does not return the new version of the object
  }


  // Push a photo to a user's photos list
  async pushPhoto(userId: number, photo: CreatePhotoDto) {

    await this.photoRepo.save(photo).then(res => {    // saving the given photo

      this.userRepo.findOne({ where: { id: userId } }).then(user => {  // Extracting the existing user using its id
        user.photos.push(res);    // Pushing the photo to the list of photos of the user
        this.userRepo.save(user)  // save the new version of the user 
      })
    })

  }
}
