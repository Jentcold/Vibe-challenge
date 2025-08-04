import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section } from './sections.schema';

@Injectable()
export class SectionsService {
  constructor(
    @InjectModel(Section.name) private sectionModel: Model<Section>,
  ) {}

  async create(idea: string) {
    const dummySections = [
      'Hero Section',
      'About Us',
      'Contact Info',
    ];
    const created = new this.sectionModel({ idea, sections: dummySections });
    return created.save();
  }

  async findAll() {
    return this.sectionModel.find().sort({ createdAt: -1 }).limit(1);
  }
}