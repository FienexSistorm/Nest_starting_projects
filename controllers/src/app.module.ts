import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { AnimalController } from './animal/animal.controller';

@Module({
  imports: [PersonModule],
  controllers: [
    AppController,
    AnimalController
  ],
  providers: [AppService],
})
export class AppModule { }
