// projects.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new project
  async createProject(createProjectDto: CreateProjectDto) {
    try {
      // Add any additional business logic here before creating the project
      const project = await this.prisma.project.create({
        data: createProjectDto,
      });

      return project;
    } catch (error) {
      throw new Error(`Failed to create project: ${error.message}`);
    }
  }

  // Get all projects
  async getAllProjects() {
    try {
      return await this.prisma.project.findMany();
    } catch (error) {
      throw new Error(`Failed to get projects: ${error.message}`);
    }
  }

  // Get a project by ID
  async getProjectById(id: number) {
    try {
      const project = await this.prisma.project.findUnique({
        where: {
          id,
        },
      });

      if (!project) {
        throw new NotFoundException('Project not found');
      }

      return project;
    } catch (error) {
      throw new Error(`Failed to get project by ID: ${error.message}`);
    }
  }

  // Update a project by ID
  async updateProject(id: number, updateProjectDto: UpdateProjectDto) {
    try {
      // Check if the project exists
      const existingProject = await this.prisma.project.findUnique({
        where: {
          id,
        },
      });

      if (!existingProject) {
        throw new NotFoundException('Project not found');
      }

      // Update the project
      const updatedProject = await this.prisma.project.update({
        where: {
          id,
        },
        data: updateProjectDto,
      });

      return updatedProject;
    } catch (error) {
      throw new Error(`Failed to update project: ${error.message}`);
    }
  }

  // Delete a project by ID
  async deleteProject(id: number) {
    try {
      // Check if the project exists
      const existingProject = await this.prisma.project.findUnique({
        where: {
          id,
        },
      });

      if (!existingProject) {
        throw new NotFoundException('Project not found');
      }

      // Delete the project
      await this.prisma.project.delete({
        where: {
          id,
        },
      });

      return { success: true, message: 'Project deleted successfully' };
    } catch (error) {
      throw new Error(`Failed to delete project: ${error.message}`);
    }
  }
}
