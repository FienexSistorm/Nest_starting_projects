import { Photo } from './../entities/photo.entity';
export class CreateUserDto {
    id: number;

    firstName: string;

    lastName: string;

    isActive: boolean;

    photos: Photo[];
}
