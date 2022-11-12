import { GlobalPipe } from './pipes/global.pipe';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new GlobalPipe())  //NOTE - This line used to activate the GlobalPipe which is a pipe that prints a message whenever a route is requested
  await app.listen(3000);
}
bootstrap();
