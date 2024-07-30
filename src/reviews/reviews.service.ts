import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
     ){}
  
  async create_review(data_review: CreateReviewDto) {
    const new_review: CreateReviewDto = this.reviewRepository.create(data_review)
    return await this.reviewRepository.save(new_review)
  }

  async get_reviews() {
    return await this.reviewRepository.find({relations: {user: true}})
  }

  async findOne(input_id: string) {
    return await this.reviewRepository.findOne({where: {id : input_id}})
  }

  async update(input_id: string, update_data: UpdateReviewDto) {
    return await this.reviewRepository.update({id: input_id}, update_data)
  }

  async remove(input_id: string) {
    const to_delete = await this.reviewRepository.findOne({where: {id: input_id}})
    return await this.reviewRepository.softRemove(to_delete)
  }
}
