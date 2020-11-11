import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Cat } from './models/cat.model';
import { CatService } from './cat.service';
import { CatDto } from './dto/cat.dto';
import { CatInput } from './models/cat-input.model';

@Resolver(of => Cat)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query(returns => Cat)
  async findOne(@Args('id') id: string): Promise<CatDto> {
    return this.catService.findOne(id);
  }

  @Query(returns => [Cat])
  findAll(): Promise<CatDto[]> {
    return this.catService.findAll();
  }

  @Mutation(returns => Cat)
  create(@Args('input') input: CatInput): Promise<CatDto> {
    return this.catService.create(input);
  }

  @Mutation(returns => Cat)
  update(
    @Args('id') id: string,
    @Args('input') input: CatInput,
  ): Promise<CatDto> {
    return this.catService.update(id, input);
  }

  @Mutation(returns => Cat)
  remove(@Args('id') id: string): Promise<CatDto> {
    return this.catService.delete(id);
  }
}
