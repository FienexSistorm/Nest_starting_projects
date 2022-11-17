import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StreamerController } from './streamer/streamer.controller';
import { StreamerService } from './streamer/streamer.service';

@Module({
  imports: [],
  controllers: [AppController, StreamerController],
  providers: [AppService, StreamerService],
})
export class AppModule {}
