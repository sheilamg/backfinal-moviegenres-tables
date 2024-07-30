import { Module } from '@nestjs/common';
import { CommentsUsersService } from './comments_users.service';
import { CommentsUsersController } from './comments_users.controller';

@Module({
  controllers: [CommentsUsersController],
  providers: [CommentsUsersService],
})
export class CommentsUsersModule {}
