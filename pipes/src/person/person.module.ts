import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [
        PersonService
    ],
    controllers: [
        PersonController
    ],
})
export class PersonModule {}
