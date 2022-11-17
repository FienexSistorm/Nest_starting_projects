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
    LoggingInterceptor
    // NOTE - This line will configire the LoggingInterceptor as a global one and conserve the ability of using DI inside the Interceptor class
    // { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor }  
  ],

})
export class AppModule { }
