import { Module } from '@nestjs/common';
import PickerController from './pickers.controller';
import PickersService from './pickers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schema/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [PickerController],
  providers: [PickersService],
})
export class PickerModule {}
