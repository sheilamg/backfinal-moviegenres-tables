import { PartialType } from '@nestjs/swagger';
import { CreateMoviesGenreDto } from './create-movies_genre.dto';

export class UpdateMoviesGenreDto extends PartialType(CreateMoviesGenreDto) {}
