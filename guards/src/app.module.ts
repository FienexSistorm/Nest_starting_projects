import { RolesGuard } from './roles/roles.guard';
import { AuthGuard } from './auth/auth.guard';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    RolesGuard,
    { // Setting up a global guard
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
})
export class AppModule { }
