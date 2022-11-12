import { Animal } from './animal.interface';
import { AnimalService } from './animal.service';


import { Controller, Delete, Get, HttpCode, Patch, Post } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators';

@Controller('animal')
export class AnimalController {


    /* ------------------- Example:: Property based Injection ------------------- */
    // @Inject(AnimalService)
    // private animalServ;
    /* ---------------------------------- ***** --------------------------------- */

    constructor(private animalServ: AnimalService) { }

    @Get()
    findAll() {
        return this.animalServ.listAnimals();
    }


    @Get("/getOne/:id")
    @HttpCode(220)  // Setting a custom 
    finOne(@Param("id") animalId: number) {  // @param allows us to manipulate the received aprameter
        return this.animalServ.getOneAnimal(animalId)
    }


    @Post()
    createOne(@Body() animal: Animal) {        //@Body is used to hold the body object passed within the request
        return this.animalServ.createAnimal(animal);
    }

    @Delete(":id")
    deleteOne(@Param("id") id: number) {
        return this.animalServ.deleteAnimal(id);
    }

    @Patch()
    updateOne(@Body() animal: Animal) {
        return this.animalServ.updateAnimal(animal)
    }



}
