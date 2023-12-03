import { Controller, Param,Delete,Put, Post, Body,Get, UsePipes, ValidationPipe  } from '@nestjs/common';
import { UserService } from './users.service';
import { UserDto } from './dto/user.dto';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: UserDto) {
    return await this.userService.createUser(userDto);
  }

  // Endpoint to get all user
  @Get()
  async getAlluser() {
    try {
      const projects = await this.userService.getAlluser();
      return { success: true, projects };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Endpoint to get a user by ID
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    try {
      const project = await this.userService.getUserById(+id);
      return { success: true, project };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Endpoint to update a user by ID
  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateProject(@Param('id') id: string, @Body() UserDto: UserDto) {
    try {
      const updateduser = await this.userService.updateUser(+id, UserDto);
      return { success: true, updateduser };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Endpoint to delete a project by ID
  @Delete(':id')
  async deleteuser(@Param('id') id: string) {
    try {
      const result = await this.userService.deleteuser(+id);
      return result;
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
