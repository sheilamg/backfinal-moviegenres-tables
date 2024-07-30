import { Module } from '@nestjs/common';
import { MoviesGenresService } from './movies_genres.service';
import { MoviesGenresController } from './movies_genres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesGenre } from './entities/movies_genre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesGenre])],
  controllers: [MoviesGenresController],
  providers: [MoviesGenresService],
})
export class MoviesGenresModule {}
