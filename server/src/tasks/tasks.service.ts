// tasks.service.ts

import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Replace with the actual path
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  // Retrieve all tasks
  async findAll() {
    try {
      return await this.prisma.task.findMany();
    } catch (error) {
      console.error('Error in findAll:', error);
      throw new Error('Error fetching tasks');
    }
  }

  // Retrieve a specific task by ID
  async findOne(id: number) {
    try {
      const task = await this.prisma.task.findUnique({
        where: { id },
      });

      if (!task) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }

      return task;
    } catch (error) {
      console.error(`Error in findOne(${id}):`, error);
      throw new Error('Error fetching task');
    }
  }

  // Create a new task
  async create(taskDto: TaskDto) {
    try {
      return await this.prisma.task.create({
        data: taskDto,
      });
    } catch (error) {
      console.error('Error in create:', error);
      throw new BadRequestException('Invalid input for creating task');
    }
  }

  // Update an existing task by ID
  async update(id: number, taskDto: TaskDto) {
    try {
      const updatedTask = await this.prisma.task.update({
        where: { id },
        data: taskDto,
      });

      if (!updatedTask) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }

      return updatedTask;
    } catch (error) {
      console.error(`Error in update(${id}):`, error);
      throw new BadRequestException('Invalid input for updating task');
    }
  }

  // Delete a task by ID
  async remove(id: number) {
    try {
      const deletedTask = await this.prisma.task.delete({
        where: { id },
      });

      if (!deletedTask) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }

      return deletedTask;
    } catch (error) {
      console.error(`Error in remove(${id}):`, error);
      throw new BadRequestException('Invalid input for deleting task');
    }
  }
}

