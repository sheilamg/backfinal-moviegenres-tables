import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create_user(@Body() data_user: CreateUserDto) {
    return this.usersService.create_user(data_user);
  }

  @Get()
  get_users() {
    return this.usersService.get_users();
  }

  @Get(':id')
  findOne(@Param('id') input_id: string) {
    return this.usersService.findOne(input_id);
  }

  @Patch(':id')
  update(@Param('id') input_id: string, @Body() update_data: UpdateUserDto) {
    return this.usersService.update(input_id, update_data);
  }

  @Delete(':id')
  remove(@Param('id') input_id: string) {
    return this.usersService.remove(input_id);
  }
}
