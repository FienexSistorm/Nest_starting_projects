import { User } from './user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: "" })
    name: string;


    @ManyToOne(type => User, user => user.photos, { lazy: true })
    user: User;



}