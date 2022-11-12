import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ClassValidationPipe implements PipeTransform {

  async transform(value: any, { metatype }: ArgumentMetadata) { // {metatype} => Distructuring Assignement 
    //NOTE - async used incase the validations are aynchronous (using promisses)
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToInstance(metatype, value);    // transforms our plain JS object into a Typed object so we can apply validation on it
    const errors = await validate(object);  // validate the object based on the passed in annotations on class level (@IsInt, @IsString, ...)

    if (errors.length > 0) {
      throw new BadRequestException("Validation Failed")
    }
    return value;
  }




  //SECTION - Bypassed the validation step if the value is plain JavaScript Type
  private toValidate(metaType: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];

    return !types.includes(metaType)
  }
}
