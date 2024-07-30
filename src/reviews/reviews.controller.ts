import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create_review(@Body() data_user: CreateReviewDto) {
    return this.reviewsService.create_review(data_user);
  }

  @Get()
  get_reviews() {
    return this.reviewsService.get_reviews();
  }

  @Get(':id')
  findOne(@Param('id') input_id: string) {
    return this.reviewsService.findOne(input_id);
  }

  @Patch(':id')
  update(@Param('id') input_id: string, @Body() update_data: UpdateReviewDto) {
    return this.reviewsService.update(input_id, update_data);
  }

  @Delete(':id')
  remove(@Param('id') input_id: string) {
    return this.reviewsService.remove(input_id);
  }
}
