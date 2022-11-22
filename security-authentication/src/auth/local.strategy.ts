import { AuthService } from './auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authServ: AuthService) {
        super(); // to customize the passport behavior, we can pass an object containing our confuguration options that we want to implement to the super() mmetho
        // Example: super({usernameField: 'email'}) => set the passport to retrieve the username from the email field of our request object
    }

    async validate(usernmae: string, password: string): Promise<any> { // The method 

        let user = await this.authServ.validator(usernmae, password);
        if (!user) {
            throw new UnauthorizedException();
            // We throw an exception if the user is not to be found in our users list 
        }

        // if the user is fournd and the credentials are valid,  the user will be returned so passport can create the user property  in the request Object. 
        //>>the request handling will continue👌
        return user;

    }

}
