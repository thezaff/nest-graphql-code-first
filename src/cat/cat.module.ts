import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatController } from './cat.controller';
import { CatResolver } from './cat.resolver';
import { CatService } from './cat.service';
import { Cat, CatSchema } from './schemas/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatService, CatResolver],
  controllers: [CatController],
})
export class CatModule {}
