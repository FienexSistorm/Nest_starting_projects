import { RolesGuard } from './../roles/roles.guard';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { Roles } from 'src/roles/roles.decorator';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';




@UseGuards(RolesGuard)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Roles("admin")
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

}
