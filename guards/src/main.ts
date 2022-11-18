import { AuthGuard } from './auth/auth.guard';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new AuthGuard());    // SECTION :: Setting a gloabl guard from outside the application context
  await app.listen(3000);
}
bootstrap();
