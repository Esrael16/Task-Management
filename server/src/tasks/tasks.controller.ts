import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly TaskService: TaskService) {}

  // Endpoint to create a new task
  @Post()
  @UsePipes(new ValidationPipe({ transform: true })) // Automatically transforms and validates DTO
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    try {
      const task = await this.TaskService.createTask(createTaskDto);
      return { success: true, task };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Create an endpoint to assign a task to a team member
  @Put(':id/delegate/:userId')
  async delegateTask(@Param('id') id: string, @Param('userId') userId: string) {
    try {
      const delegateTask = await this.TaskService.delegateTask(+id, +userId);
      return { success: true, delegateTask };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  // Endpoint to get all tasks
  @Get()
  async getAlltasks() {
    try {
      const tasks = await this.TaskService.getAlltasks();
      return { success: true, tasks };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Endpoint to get a project by ID
  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    try {
      const task = await this.TaskService.getTaskId(+id);
      return { success: true, task };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Endpoint to update a project by ID
  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateProject(@Param('id') id: string, @Body() UpdateTaskDto: UpdateTaskDto) {
    try {
      const updatedTask = await this.TaskService.updateTask(+id, UpdateTaskDto);
      return { success: true, updatedTask };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Endpoint to delete a project by ID
  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    try {
      const result = await this.TaskService.deleteTask(+id);
      return result;
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

