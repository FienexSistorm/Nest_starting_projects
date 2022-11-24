import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as session from "express-session";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setting up the application to use session
  app.use(
    session({
      secret: 'my-secret',
      saveUninitialized: false,
      resave: false
    })
  )

  await app.listen(3000);
}
bootstrap();
