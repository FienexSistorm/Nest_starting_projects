import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()

/**
 * A Global Pipe 
 * A Simple demonstration of GlobalPipes,
 * This pipe won't do anything special , it will just bypasses the value as it is after it loggs it and its type
 * The Config of this pipe as Global was done in the main.ts file with the @method useGlobalPipes of the app instance
 * Another way of setting a global pipe is from a module instead of the main.ts 
 * since when we use the preious way we cannot inject any dependecy because it was constructed outside the application context
 * 
 */

export class GlobalPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`>>>>>>>>> The global pipe is called for the value ${JSON.stringify(value)} of type: ${metadata.metatype}`)
    return value;
  }


  /**
  * SECTION - Example of configuring a global pipe from a module's metadata
  * import { APP_PIPE } from "@nestjs/core"
  * @Module({
  *   providers : [{
  *       provide: APP_PIPE,
  *       useClass: GlobalPipe
  *     }]
  * })
  * 
  *  => With this setup, regardless of the module where the construction is made, The Pipe is global and can be used by any handler
  */

}
