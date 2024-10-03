import { BadRequestException, Injectable } from '@nestjs/common';
import CreatePickerDTO from './dto/create-picker.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schema/cat.schema';
import { Model } from 'mongoose';

@Injectable()
export default class PickersService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}
  async findAll() {
    return [];
  }

  find(id: string) {
    if (id === '99') {
      throw new BadRequestException('Riguel 3ammi');
    }
    return {
      id,
    };
  }

  create(dto: CreatePickerDTO) {
    const cat = this.catModel.create({
      name: dto.name,
      age: dto.age,
    });
    return cat;
  }
}
