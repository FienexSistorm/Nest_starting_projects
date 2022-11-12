import { FindByIdPipe } from './../pipes/find-by-id.pipe';
import { UppercasePipe } from './../pipes/uppercase.pipe';
import { ClassValidationPipe } from './../pipes/class-validation.pipe';
import { PersonDto } from './person-dto/person-dto';
import { PersonService } from './person.service';
import { Person } from './person.interface';
import { Controller, Get, Param, Post, Body, ParseIntPipe, Patch, HttpStatus, Query, DefaultValuePipe } from '@nestjs/common';
import { ParseBoolPipe } from '@nestjs/common/pipes';
import { NotFoundError } from 'rxjs';
import { NotFoundException } from '@nestjs/common/exceptions';

@Controller('person')
export class PersonController {

    constructor(private personServ: PersonService) { }

    @Get("list")
    findAllPersons(): Person[] {
        return this.personServ.findAll();
    }

    /* ---------------- Providing a default value for toConserve ---------------- */
    @Get("/paginated")
    paginatedListOfPersons(
        @Query("page", new DefaultValuePipe(1)) page: number,
        @Query("skip", new DefaultValuePipe(0)) skip: number,
        @Query("isSorted", new DefaultValuePipe(false), new ParseBoolPipe()) isSorted: boolean
    ) {
        return `The requested pagination elements are: page ${page}, skip: ${skip}, isSorted: ${isSorted}`
    }

    @Get(":id")
    findById(@Param("id", ParseIntPipe) id: number): Person { // Using the ParseInt pipe to tranform the passed in value to number if possible, If not it will triiger an exception
        return this.personServ.findOne(id) ?? new NotFoundException(); // incase the person with the given id does not exist, we throw an exception indicating that the person is not fournd
    }


    @Get("findByIdPipe/:id")
    findById_usingPipe(@Param("id", FindByIdPipe) person: Person): Person {
        return person;
    }

    @Post("create")
    createPerson(@Body(ClassValidationPipe, UppercasePipe) person: PersonDto): Person[] {  // Applying the ClassValidatorPipe to insure the type for each protpery of the Person Object [ Parameter-scoped binding ]
        return this.personServ.pushPerson(person);
    }


    /* --------- Using an instance of a pipe instead of the class itself -------- */
    @Patch(":id")
    patchPerson(@Param("id", new ParseIntPipe(
        { errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }  // setting a custom status code for the error to be thrown if the id is not a valid number value (406 instead of 400)
    )) id: number, @Body() person: PersonDto) {
        // ANCHOR  - This method won't update any user, it will just return a message if the id parameter is a valid number based on the ParseIntPipe
        return `The passed-in id is a valid number value `;
    }




}
