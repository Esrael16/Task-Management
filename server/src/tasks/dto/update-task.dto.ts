import { IsNotEmpty, IsOptional, IsInt, IsDateString } from 'class-validator';

export class UpdateTaskDto {
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
  assignedToId?: number; // Include the assignedToId field for updating the assigned team member.

  @IsOptional()
  @IsInt()
  issueId?: number;
}