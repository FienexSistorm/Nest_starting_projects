import { TimeoutInterceptor } from './timeout/timeout.interceptor';
import { CacheInterceptor } from './cache/cache.interceptor';
import { ErrorInterceptor } from './error/error.interceptor';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    LoggingInterceptor,
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor
    }
  ],

})
export class AppModule { }
