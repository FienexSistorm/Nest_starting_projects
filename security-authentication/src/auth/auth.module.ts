import { jwtContants } from './contants';
import { LocalStrategy } from './local.strategy';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  providers: [
    AuthService,
    LocalStrategy
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
