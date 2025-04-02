import { IsEnum, IsOptional, IsString, IsDate } from 'class-validator';
import {
  EventType,
  NodePlatform,
  NodeType,
  Protocol,
  Result,
} from '../event.enum';

export class CreateEventDto {
  @IsEnum(NodeType)
  nodeType: NodeType;

  @IsString() nodeId: string;
  @IsOptional() @IsString() nodeName?: string;
  @IsOptional() @IsString() nodeAddress?: string;
  @IsOptional() @IsString() nodeHost?: string;

  @IsOptional() @IsEnum(NodePlatform) nodePlatform?: NodePlatform;
  @IsOptional() @IsString() nodeOsVersion?: string;
  @IsOptional() @IsString() nodeAgentVersion?: string;
  @IsOptional() @IsString() nodeLinkedServer?: string;

  @IsOptional() @IsEnum(EventType) eventType?: EventType;
  @IsOptional() @IsString() userId?: string;
  @IsOptional() @IsString() userName?: string;
  @IsOptional() @IsString() loginAccount?: string;
  @IsOptional() @IsString() clientIp?: string;
  @IsOptional() @IsString() sessionId?: string;
  @IsOptional() @IsString() summary?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsString() sessionDeviceId?: string;
  @IsOptional() @IsString() sid?: string;
  @IsOptional() @IsString() pid?: string;

  @IsOptional() @IsEnum(Protocol) protocol?: Protocol;
  @IsOptional() @IsEnum(Result) result?: Result;

  @IsOptional() @IsDate() loginAt?: number;
  @IsOptional() @IsDate() occurredAt?: number;
  @IsOptional() @IsDate() savedAt?: number;
}
