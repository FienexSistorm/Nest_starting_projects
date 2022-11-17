import { LoggingInterceptor } from './logging/logging.interceptor';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // NOTE - This line will set the LoggingInterceptor as global but restrecting us from using DI inside the interceptor class 
  // since it was registered outside the application context
  // app.useGlobalInterceptors(LoggingInterceptor)  
  await app.listen(3000);
}
bootstrap();
