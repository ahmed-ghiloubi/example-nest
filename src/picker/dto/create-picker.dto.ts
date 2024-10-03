import { IsInt, IsString } from 'class-validator';

export default class CreatePickerDTO {
  @IsString()
  name: string;

  @IsInt()
  age: number;
}
