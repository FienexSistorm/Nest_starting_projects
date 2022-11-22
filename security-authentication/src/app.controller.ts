import { Controller, Get } from '@nestjs/common';
import {  Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @UseGuards(AuthGuard('local'))
  @Post("auth/login")
  async login(@Req() request) {
    console.log(request.user)
    return request.user

  }

}
