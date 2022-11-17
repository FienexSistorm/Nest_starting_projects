
import { Injectable } from '@nestjs/common';


@Injectable()

export class AppService {
  getHello(): string {
    console.log("the method get hello has been triggered and executed")
    return 'A Sample project demonstrating the use of interceptors';
  }
}
