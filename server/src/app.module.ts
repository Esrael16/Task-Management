import { Module } from '@nestjs/common';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';

import { PrismaService } from './prisma/prisma.service';
import { ProjectsService } from './projects/projects.service';
import { ProjectsController } from './projects/projects.controller';
import { TaskController } from './tasks/tasks.controller';
import { TaskService } from './tasks/tasks.service';


@Module({
  controllers: [UserController,ProjectsController,TaskController],
  providers: [UserService,ProjectsService,TaskService,PrismaService],
})
export class AppModule {}


