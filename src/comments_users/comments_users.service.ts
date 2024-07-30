import { Injectable } from '@nestjs/common';
import { CreateCommentsUserDto } from './dto/create-comments_user.dto';
import { UpdateCommentsUserDto } from './dto/update-comments_user.dto';

@Injectable()
export class CommentsUsersService {
  create(createCommentsUserDto: CreateCommentsUserDto) {
    return 'This action adds a new commentsUser';
  }

  findAll() {
    return `This action returns all commentsUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commentsUser`;
  }

  update(id: number, updateCommentsUserDto: UpdateCommentsUserDto) {
    return `This action updates a #${id} commentsUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} commentsUser`;
  }
}
