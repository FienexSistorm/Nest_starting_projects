import { CacheInterceptor } from './cache/cache.interceptor';
import { NotFoundException } from '@nestjs/common/exceptions';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@UseInterceptors(LoggingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // This method will emit the NotFoundExeption, but it will be overriden to BadGatewayException by the ErrorInterceptor
  @Post()
  exceptionTrigger(): void {
    throw new NotFoundException();
  }

  // Using the cache interceptor, we'll get an empty [ ] instead of executing the code inside the handler

  @Get("cached_data")
  @UseInterceptors(new CacheInterceptor())
  cacheTrigger(): void {
    console.log("this message will never be executed"); 
    // NOTE - The core of this method will never be executed since the cacheInterceptor will always return the [] instead of proceeding to the handler (isCached = true)
  }
}
