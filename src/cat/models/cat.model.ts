import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class Cat {
  @Field(type => ID, { nullable: true })
  id?: string;

  @Field()
  name: string;

  @Field(type => Int)
  age: number;

  @Field({ nullable: true })
  description?: string;

  // @Field(type => [String])
  // birthDate?: Date;
}
