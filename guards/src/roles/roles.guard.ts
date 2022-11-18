import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      // If the handler has no roles metadata set for it, the request will be blocked by this Guard
      return false
    }


    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return matchRoles(roles, user?.roles ?? []);

  }
}


// SECTION - A helper method to ditermine if the user is permitted to access that route-handler based on his roles and the list of permitted roles
export function matchRoles(user_roles, permitted_roles): boolean {
  // TODO: The method returns true for now, but we will customize it when we look into authorization and authentication. To block the acces, we simply return false
  return true
}
