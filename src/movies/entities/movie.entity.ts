import { MoviesGenre } from "src/movies_genres/entities/movies_genre.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('movie')
export class Movie {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    title: string

    @Column('text')
    description: string

    @Column('int')
    release_date: number

   
  
    @CreateDateColumn()
    created_at: Date;
  
    @DeleteDateColumn()
    deleted_at?: Date;

    @OneToMany(() => MoviesGenre, (moviesGenre) => moviesGenre.movie)
    moviesGenre: MoviesGenre[]

    //review

    //imagen
}
