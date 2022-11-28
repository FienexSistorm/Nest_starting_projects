import { Reflector } from '@nestjs/core';

import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Role } from 'src/roles.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';


@Injectable()
export class RolesGuard implements CanActivate {


    constructor(private reflector: Reflector) {} // the reflector will help us extract the permitted roles for the route handler

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) { // incase the handler has no roles attached to it => permit the access to it for all users
            return true;
        }
        const { user } = context.switchToHttp().getRequest(); // extracting the user associated to the request after asuccessful authentication
        return requiredRoles.some((role) => user.roles?.includes(role));
    }
}