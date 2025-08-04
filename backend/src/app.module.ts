import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionsModule } from './sections/sections.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Vibe_challenge:${process.env.DB_PASSWORD}@vibe.ybz7omx.mongodb.net/?retryWrites=true&w=majority&appName=Vibe'),
    SectionsModule,
  ],
})
export class AppModule {}
