import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtStrategy } from './strategies/jwt.strategy';
import { jwtContants } from './contants';
import { LocalStrategy } from './strategies/local.strategy';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,

    // Providing the guard globally
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtContants.secret,  // for demo reasons only, to really secure our app, we need to hide the secret
      signOptions: { expiresIn: '60s' },
    }),
  ],
  exports: [
    AuthService
  ]

})
export class AuthModule { }
