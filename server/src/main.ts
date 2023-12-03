import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { WsAdapter } from '@nestjs/platform-ws';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.$connect();

    // Enable CORS for WebSocket
    app.enableCors();

    // Set up WebSocket server
    app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(3000);
}
bootstrap();

