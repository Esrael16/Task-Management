// // notification.gateway.ts
// import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
// import { Server } from 'socket.io';
// import { NotificationDto } from './dto/notification.dto';

// @WebSocketGateway()
// export class NotificationGateway implements OnGatewayConnection, OnGatewayDisconnect {
//   @WebSocketServer()
//   server: Server;

//   handleConnection(client: any, ...args: any[]) {
//     console.log(`Client connected: ${client.id}`);
//   }

//   handleDisconnect(client: any) {
//     console.log(`Client disconnected: ${client.id}`);
//   }

//   sendNotificationToClient(userId: string, message: string) {
//     const notificationDto: NotificationDto = { message };
//     this.server.to(userId).emit('notification', notificationDto);
//   }
// }
