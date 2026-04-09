import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './entities/genre.entity';
import { CreateGenreDto } from './dto/create-genre.dto';
import { IncompleteGenreDto } from './dto/incomplete-genre.dto';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const genre = this.genreRepository.create(createGenreDto);
    return await this.genreRepository.save(genre);
  }

  async findAll(): Promise<Genre[]> {
    return await this.genreRepository.find({
      relations: ['books', 'books.author'],
    });
  }

  async findOne(id: number): Promise<Genre> {
    return await this.genreRepository.findOneOrFail({
      where: { id },
      relations: ['books', 'books.author'],
    });
  }

  async findIncomplete(): Promise<IncompleteGenreDto[]> {
    const genres = await this.genreRepository.find();
    return genres.map((genre) => ({
      id: genre.id,
      name: genre.name,
    }));
  }

  async update(id: number, updateGenreDto: CreateGenreDto): Promise<Genre> {
    await this.genreRepository.update(id, updateGenreDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.genreRepository.delete(id);
  }
}
