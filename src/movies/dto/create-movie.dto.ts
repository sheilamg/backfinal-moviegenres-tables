import { IsArray, IsNumber, IsString } from "class-validator";
import { Genre } from "src/genres/entities/genre.entity";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateMovieDto {
    @PrimaryGeneratedColumn('increment')
    id: number

    @IsString()
    title: string

    //@IsArray()
    genre: Genre

    @IsNumber()
    release_date: number
}
