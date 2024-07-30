import { Genre } from "src/genres/entities/genre.entity";
import { Movie } from "src/movies/entities/movie.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('movie_genre')
export class MoviesGenre {
    @PrimaryGeneratedColumn('increment')
    id: number

    @ManyToOne(() => Movie, movie => movie.moviesGenre, {eager: true})
    movie: Movie

    @ManyToOne(() => Genre, genre => genre.movieGenres, {eager: true})
    genre: Genre
}
