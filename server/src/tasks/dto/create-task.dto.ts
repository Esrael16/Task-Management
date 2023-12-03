import { IsNotEmpty, IsOptional, IsInt, IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsInt()
  progress?: number;

  @IsOptional()
  @IsDateString()
  deadline?: string;

  @IsOptional()
  @IsDateString()
  schedule?: string;

  @IsNotEmpty()
  @IsInt()
  projectId: number;

  @IsOptional()
  @IsInt()
  issueId?: number;

  @IsNotEmpty()
  @IsInt()
  userId: number; 
}

