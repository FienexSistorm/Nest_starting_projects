import { CallHandler, ExecutionContext, Injectable, NestInterceptor, RequestTimeoutException } from '@nestjs/common';
import { Observable, timeout, catchError, TimeoutError, throwError } from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
    .pipe(
      timeout(5000), // Inspect the handler after 5seconds if  an error was thrown
      catchError((error) => {
        if(error instanceof TimeoutError){ // Checking if the error throws is a timeout Error, if that the case, we throw a RequestTimeoutException 
          console.log("Request Timeout, The request couldn't respond");
          return throwError(() => new RequestTimeoutException())
        }

        // if the error thrown is not a timeout error, we simply passe it through
        return throwError(() => error)
      })
    )
  }
}
