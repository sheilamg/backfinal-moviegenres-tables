import { IsNumber } from "class-validator";
import { Genre } from "src/genres/entities/genre.entity";
import { Movie } from "src/movies/entities/movie.entity";

export class CreateMoviesGenreDto {
    @IsNumber()
    movie: Movie

    @IsNumber()
    genre: Genre
}
