import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { User } from './entities/user.entity';
import { Review } from 'src/reviews/entities/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Review])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
