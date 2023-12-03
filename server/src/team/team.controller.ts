import { Controller } from '@nestjs/common';

@Controller('team')
export class TeamController {}


// // Define an enum for user roles
// enum UserRole {
//   ADMIN
//   USER
// }

// // User model with role as an enum
// model User {
//   id            Int           @id @default(autoincrement())
//   username      String        // Username of the user
//   email         String        // Email address of the user
//   password      String        // Password of the user
//   role          UserRole      @default(USER) // Role of the user, default is "USER"
//   assignedTasks Task[]        @relation("AssignedTasks") // Tasks assigned to the user
//   notifications Notification[]
// }


// // Project model to organize tasks
// model Project {
//   id          Int           @id @default(autoincrement())
//   name        String        // Name of the project
//   description String?       // Description of the project (optional)
//   progress    Int           @default(0) // Overall progress of the project (default is 0)
//   tasks       Task[]        // Tasks associated with the project
// }

// // Task model for managing individual tasks
// model Task {
//   id          Int           @id @default(autoincrement())
//   title       String        // Title of the task
//   description String?       // Description of the task (optional)
//   progress    Int           @default(0) // Progress of the task (default is 0)
//   deadline    DateTime?     // Deadline for the task (optional)
//   schedule    DateTime?     // Work schedule for the task (optional)
//   projectId   Int           // ID of the project to which the task belongs
//   project     Project       @relation(fields: [projectId], references: [id]) // Reference to the project
//   assignedTo  User?         @relation("AssignedTasks", fields: [assignedToId], references: [id]) // User to whom the task is assigned
//   assignedToId Int?         // ID of the user to whom the task is assigned
//   issues      Issue[]       // Issues associated with the task
// }

// // Issue model for tracking task-related issues
// model Issue {
//   id          Int           @id @default(autoincrement())
//   description String        // Description of the issue
//   taskId      Int           // ID of the task to which the issue is related
//   task        Task          @relation(fields: [taskId], references: [id]) // Reference to the task
// }

// // Notification model for task-related notifications
// model Notification {
//   id          Int        @id @default(autoincrement()) 
//   content     String
//   createdAt   DateTime       @default(now())
//   isRead      Boolean        @default(false)

//   // Define a relation to the user who receives the notification
//   user        User           @relation(fields: [userId], references: [id])
//   userId      Int            // Use Int instead of String for userId, assuming that User.id is of type Int

//   // Add a relation to the task associated with the notification
//   taskId      Int
// }
