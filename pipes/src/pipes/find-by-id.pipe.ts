import { PersonService } from './../person/person.service';
import { ArgumentMetadata, Inject, Injectable, PipeTransform } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class FindByIdPipe implements PipeTransform {


  /**
   * This is A FindByIdPipe which will evaluate the id value for a correct id number
   * If the value is a number, it will call the personService.findOne method to retirieve the corresponding person object
   * If not, It will throw an exception indicating that the given id value is not a valid number value
   */


  @Inject(PersonService)
  private personService;

  transform(value: any, metadata: ArgumentMetadata) {
    let id = parseInt(value);
    console.log(id)
    if (id) {
      return this.personService.findOne(id);
    } else {
      throw new NotFoundException("Invalid Number value of the id property")
    }
  }
}
