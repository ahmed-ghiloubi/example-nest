import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PickerModule } from './picker/pickers.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PickerModule,
    MongooseModule.forRoot('mongodb://localhost:27017/picker'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
