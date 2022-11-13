import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Sample application to demonstrate the integration of the TypeORM with Nest Js to communicate with MySQL Database and handle real data';
  }
}
