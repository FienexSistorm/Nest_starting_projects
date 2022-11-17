import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    console.log(`Before executing the method ${context.getHandler().name}`) 
    // NOTE - context.getHandler().name will get us the route-handler method name

    return next.handle().pipe(tap(() => console.log(`After executing the metho ${context.getHandler().name}`)));
    // NOTE - tap() is used to perform side-effects for notifications from the source obsevable
  }
}
