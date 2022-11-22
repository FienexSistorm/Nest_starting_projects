import { LocalStrategy } from './local.strategy';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [
    AuthService,
    LocalStrategy
  ],
  imports: [
    UsersModule,
    PassportModule
  ]

})
export class AuthModule { }
