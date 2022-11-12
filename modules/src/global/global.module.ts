import { GreetingsService } from './greetings.service';
import { Global, Module } from '@nestjs/common';


@Global()   // Decorating this module as global
@Module({
    providers: [
        GreetingsService
    ],
    exports: [
        GreetingsService
    ]
})
export class GlobalModule { }
