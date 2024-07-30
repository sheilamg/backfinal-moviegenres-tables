import { Test, TestingModule } from '@nestjs/testing';
import { CommentsUsersController } from './comments_users.controller';
import { CommentsUsersService } from './comments_users.service';

describe('CommentsUsersController', () => {
  let controller: CommentsUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsUsersController],
      providers: [CommentsUsersService],
    }).compile();

    controller = module.get<CommentsUsersController>(CommentsUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
