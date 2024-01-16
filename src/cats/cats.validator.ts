import { IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  mouseId: string;
}
