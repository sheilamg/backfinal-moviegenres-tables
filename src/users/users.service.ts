import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Review } from 'src/reviews/entities/review.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>
  ){}

  async create_user(data_user: CreateUserDto) {
    const new_user: CreateUserDto = this.userRepository.create(data_user)
    return await this.userRepository.save(new_user)
  }

  async get_users() {
    return await this.userRepository.find({ relations: {role: true, review: true}})
  }

  async findOne(input_id: string) {
    return await this.userRepository.findOne({where: {id : input_id}})
  }

  async update(input_id: string, update_data: UpdateUserDto) {
    return await this.userRepository.update({id: input_id}, update_data)
  }

  async remove(input_id: string) {
    const to_delete = await this.userRepository.findOne({where: {id: input_id}})
    return await this.userRepository.softRemove(to_delete)
  }
}
