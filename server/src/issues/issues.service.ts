// import { Injectable, NotFoundException } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreateIssueDto , UpdateIssueDto  } from './dto/issue.dto';


// @Injectable()
// export class IssueService {
//   constructor(private readonly prisma: PrismaService) {}

//   // Create a new Issue
//   // Inside IssueService
// async createIssue(createIssueDto: CreateIssueDto) {
//   try {
//     const issue = await this.prisma.issue.create({
//       data: createIssueDto,
//     });

//     return issue;
//   } catch (error) {
//     throw new Error(`Failed to create issue: ${error.message}`);
//   }
// }


//   // Get all issue
//   async getAllIssues() {
//     try {
//       return await this.prisma.issue.findMany();
//     } catch (error) {
//       throw new Error(`Failed to get issue: ${error.message}`);
//     }
//   }

//   // Get a issue by ID
//   async getIssuesById(id: number) {
//     try {
//       const issue = await this.prisma.issue.findUnique({
//         where: {
//           id,
//         },
//       });

//       if (!issue) {
//         throw new NotFoundException('issue not found');
//       }

//       return issue;
//     } catch (error) {
//       throw new Error(`Failed to get issue by ID: ${error.message}`);
//     }
//   }

//   // Update a issue by ID
//   async updateIssue(id: number,UpdateIssueDto  : UpdateIssueDto  ) {
//     try {
//       // Check if the issue exists
//       const existingissue = await this.prisma.issue.findUnique({
//         where: {
//           id,
//         },
//       });

//       if (!existingissue) {
//         throw new NotFoundException('issue not found');
//       }

//       // Update the issue
//       const updatedissue= await this.prisma.issue.update({
//         where: {
//           id,
//         },
//         data: UpdateIssueDto  ,
//       });

//       return updatedissue;
//     } catch (error) {
//       throw new Error(`Failed to update issue: ${error.message}`);
//     }
//   }

//   // Delete a issue by ID
//   async deleteIssue(id: number) {
//     try {
//       // Check if the issue exists
//       const existingissue = await this.prisma.issue.findUnique({
//         where: {
//           id,
//         },
//       });

//       if (!existingissue) {
//         throw new NotFoundException('issue not found');
//       }

//       // Delete the issue
//       await this.prisma.issue.delete({
//         where: {
//           id,
//         },
//       });

//       return { success: true, message: 'issue deleted successfully' };
//     } catch (error) {
//       throw new Error(`Failed to delete issues: ${error.message}`);
//     }
//   }
// }
