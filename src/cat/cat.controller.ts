import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatDto } from './dto/cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Cat> {
    return this.catService.findOne(id);
  }

  @Post()
  create(@Body() cat: CatDto): Promise<Cat> {
    return this.catService.create(cat);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() cat: CatDto): Promise<Cat> {
    return this.catService.update(id, cat);
  }
}
