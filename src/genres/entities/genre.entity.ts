import { MoviesGenre } from "src/movies_genres/entities/movies_genre.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('genre')
export class Genre {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string

    @CreateDateColumn()
    created_at: Date;
  
    @DeleteDateColumn()
    deleted_at?: Date;

    @OneToMany(() => MoviesGenre, movieGenre => movieGenre.genre)
    movieGenres: MoviesGenre[]
}
