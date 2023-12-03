// tasks.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // Get all tasks
  @Get()
  async findAll() {
    try {
      return await this.tasksService.findAll();
    } catch (error) {
      console.error('Error in findAll:', error);
      throw new InternalServerErrorException('Error fetching tasks');
    }
  }

  // Get a specific task by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.tasksService.findOne(+id);
    } catch (error) {
      console.error(`Error in findOne(${id}):`, error);
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Error fetching task');
      }
    }
  }

  // Create a new task
  @Post()
  async create(@Body() taskDto: TaskDto) {
    try {
      return await this.tasksService.create(taskDto);
    } catch (error) {
      console.error('Error in create:', error);
      throw new BadRequestException('Invalid input for creating task');
    }
  }

  // Update an existing task by ID
  @Put(':id')
  async update(@Param('id') id: string, @Body() taskDto: TaskDto) {
    try {
      return await this.tasksService.update(+id, taskDto);
    } catch (error) {
      console.error(`Error in update(${id}):`, error);
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Error updating task');
      }
    }
  }

  // Delete a task by ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.tasksService.remove(+id);
    } catch (error) {
      console.error(`Error in remove(${id}):`, error);
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Error deleting task');
      }
    }
  }
}
