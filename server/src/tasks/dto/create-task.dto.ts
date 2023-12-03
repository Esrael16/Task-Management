import { IsNotEmpty, IsOptional, IsInt, IsDateString, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;
 
  @IsNotEmpty()
  @IsString()
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
}

