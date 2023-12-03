import { Injectable, ConflictException, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UserDto } from './dto/user.dto';

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
        throw new ConflictException('Email or username already exists');
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

   // Get all user
   async getAlluser() {
    try {  
      return await this.prisma.user.findMany();
    } catch (error) {
      throw new Error(`Failed to get user: ${error.message}`);
    }
  }

  // Get a user by ID
  async getUserById(id: number) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        throw new NotFoundException('user not found');
      }

      return user;
    } catch (error) {
      throw new Error(`Failed to get user by ID: ${error.message}`);
    }
  }

  // Update a user by ID
  async updateUser(id: number, UserDto: UserDto) {
    try {
      // Check if the user exists
      const existingUser = await this.prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!existingUser) {
        throw new NotFoundException('user not found');
      }

      // Update the user
      const updatedUser = await this.prisma.user.update({
        where: {
          id,
        },
        data: UserDto,
      });

      return updatedUser;
    } catch (error) {
      throw new Error(`Failed to update user: ${error.message}`);
    }
  }

  // Delete a user by ID
  async deleteuser(id: number) {
    try {
      // Check if the user exists
      const existinguser = await this.prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!existinguser) {
        throw new NotFoundException('user not found');
      }

      // Delete the user
      await this.prisma.user.delete({
        where: {
          id,
        },
      });

      return { success: true, message: 'user deleted successfully' };
    } catch (error) {
      throw new Error(`Failed to delete user: ${error.message}`);
    }
  }
}
