import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoviesGenresService } from './movies_genres.service';
import { CreateMoviesGenreDto } from './dto/create-movies_genre.dto';
import { UpdateMoviesGenreDto } from './dto/update-movies_genre.dto';

@Controller('movies-genres')
export class MoviesGenresController {
  constructor(private readonly moviesGenresService: MoviesGenresService) {}

  @Post()
  create(@Body() createMoviesGenreDto: CreateMoviesGenreDto) {
    return this.moviesGenresService.create(createMoviesGenreDto);
  }

  @Get()
  findAll() {
    return this.moviesGenresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesGenresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoviesGenreDto: UpdateMoviesGenreDto) {
    return this.moviesGenresService.update(+id, updateMoviesGenreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesGenresService.remove(+id);
  }
}
