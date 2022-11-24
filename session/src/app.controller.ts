import { Controller, Get, Req, Session } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  /**
   * 
   * @param session.visits will be increased by any request made to these two routes.
   * The idea is demonstrate the access of the session object and manipulate our informations and rextract them
   * The value will be overriden each time a request was made thanks to session configuration's resave option set to false
   */

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
