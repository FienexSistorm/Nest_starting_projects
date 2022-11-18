import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const isCached: boolean = true;

    if (isCached) {
      // Preventing calling the handler and returning the cached data instead of re-fetching it, In this example we assime that the data is the empty array[]
      return of([]);
      // TODO:: We will look more in how to cache data and how to return it instead of returning hard coded value like this example
    }

    return next.handle();
  }
}
