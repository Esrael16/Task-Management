import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';

// Create a custom interface extending the default Express Request interface
interface CustomRequest extends Request {
  session: {
    user: {
      userId: string;
      username: string; // Additional property
      // Add other properties if needed
    };
    // Add other session properties if needed
  };
  user?: {
    userId: string;
    username: string; // Additional property
    // Add other properties if needed
  };
}

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    // Check if the route is marked as public
    const isPublicRoute = this.reflector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass()
    ]);

    if (isPublicRoute) return true;

    // Get the 'session' property from the custom request interface
    const request = context.switchToHttp().getRequest<CustomRequest>();

    // Check if the user is authenticated based on the session
    if (request.session?.user?.userId) {
      // Set 'user' property on the request for later use in the application
      request.user = request.session.user;
      return true;
    }

    // If session or user information is not present, throw UnauthorizedException
    throw new UnauthorizedException('Session not provided');
  }
}
