import { Person } from './person.interface';
import { PersonDto } from './person-dto/person-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {

    private persons: Person[] = [
        { id: 1, name: "Super Mario", email: "mario@email.com" },
        { id: 2, name: "Miss Peach", email: "peach@email.com" },
    ];


    findAll(): Person[] {
        return this.persons;
    }

    findOne(id: number): Person {
        let person = this.persons.find(val => val.id == id)
        return person;
    }

    pushPerson(person: PersonDto): Person[] {
        this.persons.push(person);
        return this.persons;
    }


}
