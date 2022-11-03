/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, HttpCode, Patch, Post } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators';

@Controller('animal')
export class AnimalController {

    @Get()
    findAll() {
        return "this api return a list of animals"
    }


    @Get("/getOne/:id")
    @HttpCode(220)  // Setting a custom 
    finOne(@Param("id") animalId: number) {  // @param allows us to manipulate the received aprameter
        return "Returning one animal of the id " + animalId;
    }


    @Post()
    createOne(@Body() request: any) {         // @Body() used to catch the request's payload
        return "this is the method for creating a new element " + request.name
    }

    @Delete(":id")
    deleteOne(@Param("id") animalId: number) { // @Param("id") is used tocatch the animal that we want to delete
        return "this api will delete an animal of the id " + animalId;
    }

    @Patch()
    updateOne(@Body() request: any) {  //The received body request icontains two attributes { name: string, id: number}
        return "Patch a new name [" + request?.name + "] to the animal wil the id " + request?.id;
    }


    /* --------------------------- A request wildcard --------------------------- */
    @Get("wild*")
    wildcardEndpoint() { // the use of * is to indicate that ever route starts with the prefix [wild] will be handeled by this route-handler
        return "this is a wildcard api that will respond to all request that start with [wild]"
    }



}
