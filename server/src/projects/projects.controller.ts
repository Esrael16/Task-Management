// projects.controller.ts

import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  // Endpoint to create a new project
  @Post()
  @UsePipes(new ValidationPipe({ transform: true })) // Automatically transforms and validates DTO
  async createProject(@Body() createProjectDto: CreateProjectDto) {
    try {
      const project = await this.projectsService.createProject(createProjectDto);
      return { success: true, project };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Endpoint to get all projects
  @Get()
  async getAllProjects() {
    try {
      const projects = await this.projectsService.getAllProjects();
      return { success: true, projects };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Endpoint to get a project by ID
  @Get(':id')
  async getProjectById(@Param('id') id: string) {
    try {
      const project = await this.projectsService.getProjectById(+id);
      return { success: true, project };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Endpoint to update a project by ID
  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateProject(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    try {
      const updatedProject = await this.projectsService.updateProject(+id, updateProjectDto);
      return { success: true, updatedProject };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Endpoint to delete a project by ID
  @Delete(':id')
  async deleteProject(@Param('id') id: string) {
    try {
      const result = await this.projectsService.deleteProject(+id);
      return result;
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
