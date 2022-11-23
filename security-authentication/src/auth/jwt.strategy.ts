import { jwtContants } from './contants';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {  // Note that the stragey passed here is from passport-jwt and not the same as the previous (passport-local)


    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
            // supplies the method by which the JWT will be extracted from the RequestWe will use the standard approach of supplying a bearer token in the Authorization header of our API requests.
            ignoreExpiration: false, // Force the verification of the token's expiration
            secretOrKey: jwtContants.secret, // Providing the secret we used for generatin g the token (so they can be used for the decoding prcess)
        });
    }

    async validate(payload: any) {
        // NOTE - We can use this method to do further checks or loogin for an extended object of the user to be used throught out our application.
        return { userId: payload.sub, username: payload.username };
    }

}