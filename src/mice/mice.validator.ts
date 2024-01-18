import { IsNotEmpty } from 'class-validator';

export class CreateMouseDto {
  @IsNotEmpty()
  name: string;
}
