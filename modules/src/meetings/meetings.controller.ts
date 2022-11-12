import { GreetingsService } from './../global/greetings.service';

import { Controller, Get } from '@nestjs/common';

@Controller('meetings')
export class MeetingsController {


    /* ----------------- Greeting Service is a provider from the ---------------- */
    /* ------------------------------ Global Module ----------------------------- */
    /* -------- Using it in the example to demonstrate the Global modules ------- */
    

    constructor(private greetServ: GreetingsService) { }

    @Get("morning")
    sayGoodmorning() {
        return this.greetServ.sayGoodmorning();
    }


    @Get("Evening")
    sayGoodAfternoon(): string {
        return this.greetServ.sayGoodEvening();
    }

    @Get("night")
    sayGoodnight(): string {
        return this.greetServ.sayGoodNight();
    }
}
