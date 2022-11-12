import { GlobalModule } from './../global/global.module';
import { Module } from '@nestjs/common';
import { MeetingsController } from './meetings.controller';

@Module({
  controllers: [MeetingsController],
  imports: [GlobalModule]
})
export class MeetingsModule { }
