import { Controller, Get, Post, Body } from '@nestjs/common';
import { SectionsService } from './sections.service';

@Controller('sections')
export class SectionsController {
  constructor(private readonly service: SectionsService) {}

  @Post()
  async create(@Body('idea') idea: string) {
    return this.service.create(idea);
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }
}