import { Module } from '@nestjs/common';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';

import { PrismaService } from './prisma/prisma.service';
import { ProjectsService } from './projects/projects.service';
import { ProjectsController } from './projects/projects.controller';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';






@Module({
  
  controllers: [UserController,ProjectsController,TasksController,],
  providers: [UserService,ProjectsService,TasksService,PrismaService],
})
export class AppModule {}

