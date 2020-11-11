import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatDto } from './dto/cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  create(cat: CatDto): Promise<Cat> {
    const createdCat = new this.catModel(cat);
    return createdCat.save();
  }

  findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  findOne(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }

  async update(id: string, cat: CatDto): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, cat, { new: true }).exec();
  }

  async delete(id: string): Promise<Cat> {
    const doc = await this.catModel.findById(id);
    await doc.remove();
    return doc;
  }
}
