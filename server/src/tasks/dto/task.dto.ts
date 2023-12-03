// task.dto.ts

import { IsOptional, IsDateString, IsNotEmpty } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  progress?: number = 0;

  @IsOptional()
  @IsDateString()
  deadline?: Date;

  @IsOptional()
  @IsDateString()
  schedule?: Date;

  @IsNotEmpty()
  projectId: number;

  @IsOptional()
  assignedToId?: number;
}
