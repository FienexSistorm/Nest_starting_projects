import { IS_PUBLIC_KEY } from './../decorators/public.decorator';
import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from "@nestjs/passport";


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {


    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext) {

        // NOTE - We can customize our authentication logic here in this method
        // return super.canActivate(context);

        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) { // permit access for public-decorated classes  by returning true directly 
            return true;
        }
        return super.canActivate(context);

    }

    handleRequest(err, user, info) {
        // We can intercept the validation result here to inject our custom logic for either a successful auth or a failed one
        if (err || !user) {
            throw err || new UnauthorizedException();
        }
        return user;
    }

}
