// // projects.controller.ts

// import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
// import { IssueService } from './issues.service';
// import {CreateIssueDto ,UpdateIssueDto } from './dto/issue.dto';


// @Controller('issues')
// export class IssueController {
//   constructor(private readonly IssueService: IssueService) {}

//   // Endpoint to create a new project
//   @Post()
//   @UsePipes(new ValidationPipe({ transform: true })) // Automatically transforms and validates DTO
//   async createIssue(@Body() CreateIssueDto : CreateIssueDto ) {
//     try {
//       const Issue = await this.IssueService.createIssue(CreateIssueDto );
//       return { success: true, Issue };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   }

//   // Endpoint to get all projects
//   @Get()
//   async getAllIssues() {
//     try {
//       const Issue = await this.IssueService.getAllIssues();
//       return { success: true, Issue };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   }

//   // Endpoint to get a project by ID
//   @Get(':id')
//   async getIssuesById(@Param('id') id: string) {
//     try {
//       const project = await this.IssueService.getIssuesById(+id);
//       return { success: true, project };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   }

//   // Endpoint to update a project by ID
//   @Put(':id')
//   @UsePipes(new ValidationPipe({ transform: true }))
//   async updateIssue(@Param('id') id: string, @Body() UpdateIssueDto : UpdateIssueDto ) {
//     try {
//       const updatedIssue = await this.IssueService.updateIssue(+id, UpdateIssueDto );
//       return { success: true, updatedIssue };
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   }

//   // Endpoint to delete a project by ID
//   @Delete(':id')
//   async deleteIssue(@Param('id') id: string) {
//     try {
//       const result = await this.IssueService.deleteIssue(+id);
//       return result;
//     } catch (error) {
//       return { success: false, error: error.message };
//     }
//   }
// }
