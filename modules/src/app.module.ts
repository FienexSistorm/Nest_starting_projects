import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';
import { MeetingsModule } from './meetings/meetings.module';

@Module({
  imports: [AnimalModule, MeetingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
