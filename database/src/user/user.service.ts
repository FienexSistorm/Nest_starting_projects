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


  // Push a photo to a user
  pushPhoto(userId: number, ph: Photo): void {
    this.photoRepo.save(ph).then(photo => {

      this.findOne(userId).then(res => {
        let user = res;
        user.photos.push(photo);
        this.dataSource
          .createQueryBuilder()
          .update(User)
          .set(user)
          .where("id =:id", { id: userId })
          .execute()
      })
    })
  }
}
