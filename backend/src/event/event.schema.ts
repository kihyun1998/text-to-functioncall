import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  EventType,
  NodePlatform,
  NodeType,
  Protocol,
  Result,
} from './event.enum';

@Schema()
export class Event extends Document {
  @Prop({ enum: NodeType, required: true })
  nodeType: NodeType;

  @Prop({ required: true }) nodeId: string;
  @Prop() nodeName: string;
  @Prop() nodeAddress: string;
  @Prop() nodeHost: string;

  @Prop({ enum: NodePlatform }) nodePlatform: NodePlatform;
  @Prop() nodeOsVersion: string;
  @Prop() nodeAgentVersion: string;
  @Prop() nodeLinkedServer: string;

  @Prop({ enum: EventType }) eventType: EventType;
  @Prop() userId: string;
  @Prop() userName: string;
  @Prop() loginAccount: string;
  @Prop() clientIp: string;
  @Prop() sessionId: string;
  @Prop() summary: string;
  @Prop() description: string;
  @Prop() sessionDeviceId: string;
  @Prop() sid: string;
  @Prop() pid: string;

  @Prop({ enum: Protocol }) protocol: Protocol;
  @Prop({ enum: Result }) result: Result;

  @Prop() loginAt: Date;
  @Prop() occurredAt: Date;
  @Prop() savedAt: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
