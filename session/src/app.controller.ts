import { Controller, Get, Req, Session } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Req() request: Request): string {
    request.session["visits"] = request.session["visits"] ? request.session["visits"] + 1 : 1;
    return this.appService.getHello();
  }

  @Get('visits')
  getVisitsNumber(@Session() session: Record<string, any>) {
    session.visits = session.visits ? session.visits + 1 : 1;
    return session.visits;
  }

}
