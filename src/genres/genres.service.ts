import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './entities/genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>
  ){}

  async create(createGenreDto: CreateGenreDto) {
    const new_genre: CreateGenreDto = this.genreRepository.create(createGenreDto)
    return await this.genreRepository.save(new_genre)
  }

  async findAll() {
    return await this.genreRepository.find()
  }

  async findOne(input_id: number) {
    return await this.genreRepository.findOne({where: {id : input_id}})
  }

  async update(input_id: number, updateGenreDto: UpdateGenreDto) {
    return await this.genreRepository.update({id: input_id}, updateGenreDto)
  }

  async remove(input_id: number) {
    const to_delete = await this.genreRepository.findOne({where: {id: input_id}})
    return await this.genreRepository.softRemove(to_delete)
  }
}
