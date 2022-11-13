
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Photo } from './photo.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;


    @OneToMany(() => Photo, (photo) => photo.user, { cascade: true, eager: true })
    photos: Photo[];
    // NOTE - The cascade option is required for the auto-insertion of the list of photos incase they are passed in the user Object to be created
    // NOTE - Eager option is set to force the extraction og the associated photo when the user is requested
}


