import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {


  constructor(@InjectRepository(User) private userRepo: Repository<User>) { }


  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  create(createUserDto: CreateUserDto) {
    console.log(this.userRepo.save(createUserDto))
  }


  findOne(id: number): Promise<User> {
    return this.userRepo.findOneBy({ id })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    await this.userRepo.delete(id);
  }
}
