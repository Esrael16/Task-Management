// user.dto.ts

import { IsEmail, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from '../../shared/middleware/roles.enum'; // Adjust the path accordingly

export class UserDto {
  // You can remove IsNotEmpty for fields where empty values are allowed
  username: string;

  @IsEmail({})
  email: string;


  password: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;

  // If you have other properties like assignedTasks or notifications, add them here
}
