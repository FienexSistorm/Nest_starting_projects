import { BadGatewayException, CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';


// This interceptor will be registered as global 
@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {


    return next.handle()
      .pipe(
        catchError((error) => throwError(() => new BadGatewayException()))
      )
  }
}
