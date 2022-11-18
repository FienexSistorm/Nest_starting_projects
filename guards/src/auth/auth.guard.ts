import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';


/**
 * @Authguard is just a simple example of implimentation of guard indicating the execution context, and also how to get access to the request itself
 */

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const handler = context.getHandler().name;   // extracing the name of the requested handler method
    const controller = context.getClass().name;  // extracing the name of the controller class

    // a simple message displayed to indicate that the canActive method was triggered
    console.log(`The guard was executed for the route handler ${handler} from the class ${controller}`);    

    // TODO: enable this method to consult the request object passed through the Execution context
    // const request = context.switchToHttp().getRequest();
    // console.log({ request })  
    return true;
  }
}
