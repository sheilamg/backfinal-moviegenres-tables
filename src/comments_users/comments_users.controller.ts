import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsUsersService } from './comments_users.service';
import { CreateCommentsUserDto } from './dto/create-comments_user.dto';
import { UpdateCommentsUserDto } from './dto/update-comments_user.dto';

@Controller('comments-users')
export class CommentsUsersController {
  constructor(private readonly commentsUsersService: CommentsUsersService) {}

  @Post()
  create(@Body() createCommentsUserDto: CreateCommentsUserDto) {
    return this.commentsUsersService.create(createCommentsUserDto);
  }

  @Get()
  findAll() {
    return this.commentsUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentsUserDto: UpdateCommentsUserDto) {
    return this.commentsUsersService.update(+id, updateCommentsUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsUsersService.remove(+id);
  }
}
