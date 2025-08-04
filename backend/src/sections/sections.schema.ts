import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Section extends Document {
  @Prop()
  idea: string;

  @Prop({ type: [String] })
  sections: string[];
}

export const SectionSchema = SchemaFactory.createForClass(Section);