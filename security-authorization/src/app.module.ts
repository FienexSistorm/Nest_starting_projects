import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesGuard } from './rbac/guards/roles.guard';

@Module({
  imports: [
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { 
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ],
})
export class AppModule {}
