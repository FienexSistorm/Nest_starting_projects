import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nest Authentication Sample Project Using Passport';
  }
}
