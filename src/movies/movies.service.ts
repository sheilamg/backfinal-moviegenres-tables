import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { Genre } from 'src/genres/entities/genre.entity';
import { MoviesGenre } from 'src/movies_genres/entities/movies_genre.entity';

@Injectable()
export class MoviesService {

  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
    @InjectRepository(MoviesGenre)
    private moviesGenreRepository: Repository<MoviesGenre>
  ){}

  async createMovieWithGenres(movieData, genreIds: number[]) {
    const movie = this.movieRepository.create(movieData)
    await this.movieRepository.save(movie)
    
    for(const genreId of genreIds){
      const genre = await this.genreRepository.findOneBy({ id: genreId })
      if(genre){
       const movieGenre = new MoviesGenre()
       movieGenre.movie = movie;
       movieGenre.genre = genre;
       await this.moviesGenreRepository.save(movieGenre)
      }
    }

    return movie
  }

  async findMoviesWithGenres() {
    return this.movieRepository.find({
      relations: ['movieGenres','movieGenes.genre']
    })
  }

  async findOne(input_id: number) {
    return await this.movieRepository.findOne({where: {id : input_id}})
  }

  async update(input_id: number, updateMovieDto: UpdateMovieDto) {
    return await this.movieRepository.update({id: input_id}, updateMovieDto)
  }

  async remove(input_id: number) {
    const to_delete = await this.movieRepository.findOne({where: {id: input_id}})
    return await this.movieRepository.softRemove(to_delete)
  }
}
