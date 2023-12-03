// projects.service.ts
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new task
  async createTask(createTaskDto: CreateTaskDto) {
    try {
      // Add any additional business logic here before creating the task
      const task = await this.prisma.task.create({
        data: createTaskDto,
      });

      return task;
    } catch (error) {
      throw new Error(`Failed to create task: ${error.message}`);
    }
  }

  // Method to delegate a task to a team member
  async delegateTask(taskId: number, assigneeId: number): Promise<{ success: boolean; assignedTask?: any; error?: string }> {
    try {
      // Check if the task exists
      const task = await this.prisma.task.findUnique({ where: { id: taskId } });

      if (!task) {
        throw new NotFoundException(`Task with ID ${taskId} not found`);
      }
      // Assign the task to the team member
      const assignedTask = await this.prisma.task.update({
        where: { id: taskId },
        data: { assignedToId: assigneeId },
      });

      return { success: true, assignedTask };
    } catch (error) {
      return { success: false, error: `Failed to assign task: ${error.message}` };
    }
  }

  // Method to assign a task to a team member
  async assignTask(taskId: number, userId: number) {
    try {
      // Check if the task and user exist
      const existingTask = await this.prisma.task.findUnique({
        where: {
          id: taskId,
        },
      });

      const existingUser = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!existingTask || !existingUser) {
        throw new NotFoundException('Task or user not found');
      }

      // Assign the task to the team member
      const assignedTask = await this.prisma.task.update({
        where: {
          id: taskId,
        },
        data: {
          assignedToId: userId,
        },
      });

      return assignedTask;
    } catch (error) {
      throw new Error(`Failed to assign task: ${error.message}`);
    }
  }

  // Get all tasks.
  async getAlltasks() {
    try {
      return await this.prisma.task.findMany();
    } catch (error) {
      throw new Error(`Failed to get tasks: ${error.message}`);
    }
  }

  // Get a task by ID
  async getTaskId(id: number) {
    try {
      const task = await this.prisma.task.findUnique({
        where: {
          id,
        },
      });

      if (!task) {
        throw new NotFoundException('Task not found');
      }

      return task;
    } catch (error) {
      throw new Error(`Failed to get task by ID: ${error.message}`);
    }
  }

  // Update a task by ID
  async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      // Check if the task exists
      const existingTask = await this.prisma.task.findUnique({
        where: {
          id,
        },
      });

      if (!existingTask) {
        throw new NotFoundException('Task not found');
      }

      // Update the task
      const updatedTask = await this.prisma.task.update({
        where: {
          id,
        },
        data: updateTaskDto,
      });

      return updatedTask;
    } catch (error) {
      throw new Error(`Failed to update task: ${error.message}`);
    }
  }

  // Delete a task by ID
  async deleteTask(id: number) {
    try {
      // Check if the task exists
      const existingTask = await this.prisma.task.findUnique({
        where: {
          id,
        },
      });

      if (!existingTask) {
        throw new NotFoundException('Task not found');
      }

      // Delete the task
      await this.prisma.task.delete({
        where: {
          id,
        },
      });

      return { success: true, message: 'Task deleted successfully' };
    } catch (error) {
      throw new Error(`Failed to delete task: ${error.message}`);
    }
  }
}
