import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [
        AnimalService
    ],
    controllers: [
        AnimalController
    ],
    exports: [
        // allowing modules that imports the AnimalModule to access the shared instance of the AnimalService (Shared Module [Singleton by default])
        AnimalService,
    ]
})
export class AnimalModule { }
