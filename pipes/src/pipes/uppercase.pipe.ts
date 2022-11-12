import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';


@Injectable()

/**
 * An uppercase Pipe : it will be used to transtorm the value of the person's name to uppercase
 */

export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    value.name = (value.name as string).toUpperCase()

    return value;
  }
}
