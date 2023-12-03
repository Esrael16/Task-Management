// /// notification.service.ts
// import { Injectable } from '@nestjs/common';
// import { NotificationGateway } from './notification.gateway';
// import { NotificationDto } from './dto/notification.dto';

// @Injectable()
// export class NotificationService {
//   constructor(private readonly notificationGateway: NotificationGateway) {}

//   sendTaskAssignmentNotification(userId: string, taskTitle: string) {
//     const message = `You have been assigned a new task: ${taskTitle}`;
//     const notificationDto: NotificationDto = { message };
//     this.notificationGateway.sendNotificationToClient(userId, message);
//   }
// }
