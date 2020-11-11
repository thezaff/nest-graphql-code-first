import { InputType, ObjectType } from '@nestjs/graphql';
import { IsString, IsNumber, Min, IsDate } from 'class-validator';

@InputType()
@ObjectType()
export class CatDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  @Min(1)
  readonly age: number;

  @IsString()
  readonly description?: string;

  // @IsDate()
  // readonly birthDate?: Date;
}
