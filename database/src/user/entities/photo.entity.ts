import { User } from './user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;


    @ManyToOne(type => User, user => user.photos)
    user: User;



}