import { Injectable } from '@nestjs/common';
import { CreateMoviesGenreDto } from './dto/create-movies_genre.dto';
import { UpdateMoviesGenreDto } from './dto/update-movies_genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MoviesGenre } from './entities/movies_genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesGenresService {
  constructor(
    @InjectRepository(MoviesGenre)
    private movieGenreRepository: Repository<MoviesGenre>
  ){}

  async create(createMoviesGenreDto: CreateMoviesGenreDto) {
    return this.movieGenreRepository.save(createMoviesGenreDto);
    }

  findAll() {
    return `This action returns all moviesGenres`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moviesGenre`;
  }

  update(id: number, updateMoviesGenreDto: UpdateMoviesGenreDto) {
    return `This action updates a #${id} moviesGenre`;
  }

  remove(id: number) {
    return `This action removes a #${id} moviesGenre`;
  }
}
