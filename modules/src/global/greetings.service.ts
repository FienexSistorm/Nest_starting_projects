import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingsService {



    sayHello(): string {
        return "Hello everyone";
    }

    sayGoodmorning(): string {
        return "Good Morning";
    }

    sayGoodNight(): string {
        return "Good night"
    }

    sayGoodEvening(): string {
        return "Good Evening";
    }

}
