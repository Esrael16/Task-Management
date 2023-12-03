import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: UserDto) {
    return await this.userService.createUser(userDto);
  }
}
