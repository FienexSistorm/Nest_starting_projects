import { Animal } from './animal.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimalService {


    private animals: Animal[] =
        [
            {
                id: 1,
                name: "Cat",
                sound: "Meow"
            },
            {
                id: 2,
                name: "Dog",
                sound: "Barf"
            },
            {
                id: 3,
                name: "Rooster",
                sound: "Roost"
            }
        ]



    listAnimals(): Animal[] {
        return this.animals;
    }

    createAnimal(animal: Animal): Animal[] {
        animal.id = this.animals.length + 1;
        this.animals.push(animal)
        return this.animals;
    }

    getOneAnimal(id: number): Animal {
        return this.animals.find(el => el.id == id);
    }

    updateAnimal(animal: Animal) {
        let oldAnimal = this.animals.find(el => el.id == animal.id);
        oldAnimal.sound = animal.sound;
        oldAnimal.name = animal.name;

        return this.animals;
    }

    deleteAnimal(idAnimal: number): Animal[] {
        this.animals = this.animals.filter(val => val.id != idAnimal);
        return this.animals;
    }

}
