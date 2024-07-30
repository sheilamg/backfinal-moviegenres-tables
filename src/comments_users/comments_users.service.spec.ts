import { Test, TestingModule } from '@nestjs/testing';
import { CommentsUsersService } from './comments_users.service';

describe('CommentsUsersService', () => {
  let service: CommentsUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsUsersService],
    }).compile();

    service = module.get<CommentsUsersService>(CommentsUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
