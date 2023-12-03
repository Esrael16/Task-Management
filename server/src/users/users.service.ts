import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(UserDto: { email: string; username: string; password: string }) {
    try {
      // Check if email, username, and password are provided
      if (!UserDto.email || !UserDto.username || !UserDto.password) {
        throw new BadRequestException('Email, username, and password are required');
      }

      // Hash the password before creating the user
      const hashedPassword = await bcrypt.hash(UserDto.password, 10);

      // Use Prisma's unique constraint to check if email or username already exists
      const existingUser = await this.prisma.user.findFirst({
        where: {
          OR: [
            { email: UserDto.email },
            { username: UserDto.username },
          ],
        },
      });

      if (existingUser) {
        throw new BadRequestException('Email or username already exists');
      }

      // Create the user with the hashed password
      const newUser = await this.prisma.user.create({
        data: {
          ...UserDto,
          password: hashedPassword,
        },
      });

      // Return a success JSON response
      return {
        status: 'success',
        message: 'User created successfully',
      };
    } catch (error) {
      // Return an error JSON response
      return {
        status: 'error',
        message: `Error creating user: ${error.message}`,
      };
    }
  }
}
