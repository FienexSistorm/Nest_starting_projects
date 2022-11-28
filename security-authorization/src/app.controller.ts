import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './rbac/decorators/roles.decorator';
import { Role } from './roles.enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  

  @Roles(Role.ADMIN)
  @Post("secured-post")
  savePost(@Body("name") name: string): string {
    
    // This endpont is permitted for admin users only
    return `You have tried to save a name value ${name}`;
  }

}
