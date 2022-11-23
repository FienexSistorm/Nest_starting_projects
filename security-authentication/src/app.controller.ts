import { LocalAuthGuard } from './auth/local-auth.guard';
import { Controller, Get } from '@nestjs/common';
import { Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authServ: AuthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @UseGuards(AuthGuard('local'))  // Normal usage of the AuthGuard Class 
  @UseGuards(LocalAuthGuard)    // Using our localGuard that extends from the AuthGuard Class
  @Post("auth/login")
  async login(@Req() request) {
    console.log(request.user)
    // calling the login method to generate the jwt-token for our newly logged it user after that the guard checked his credintials validity
    return  {token: (await this.authServ.login(request.user)).access_token, user:request.user} ;

  }

}
