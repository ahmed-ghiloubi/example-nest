import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import PickersService from './pickers.service';
import CreatePickerDTO from './dto/create-picker.dto';

@Controller('pickers')
export default class PickerController {
  constructor(private pickersService: PickersService) {}
  @Get()
  async findAll() {
    return await this.pickersService.findAll();
  }

  @Get('/:id')
  async find(@Param('id') id: string) {
    return this.pickersService.find(id);
  }

  @Post()
  async create(@Body() createPickerDTO: CreatePickerDTO) {
    return this.pickersService.create(createPickerDTO);
  }
}
