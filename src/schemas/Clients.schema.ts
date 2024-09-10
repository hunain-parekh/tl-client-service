import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema({ timestamps: true, collection: 'tl_clients' })
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  poc_name: string;

  @Prop({ required: true, unique: true })
  poc_email: string;

  @Prop({ default: false })
  _active: boolean;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
