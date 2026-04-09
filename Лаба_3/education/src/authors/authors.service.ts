import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
import { CreateAuthorDto } from './dto/create-author.dto';
import { IncompleteAuthorDto } from './dto/incomplete-author.dto';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = this.authorRepository.create(createAuthorDto);
    return await this.authorRepository.save(author);
  }

  async findAll(): Promise<Author[]> {
    return await this.authorRepository.find({
      relations: ['books', 'books.genre'],
    });
  }

  async findOne(id: number): Promise<Author> {
    return await this.authorRepository.findOneOrFail({
      where: { id },
      relations: ['books', 'books.genre'],
    });
  }

  async findIncomplete(): Promise<IncompleteAuthorDto[]> {
    const authors = await this.authorRepository.find();
    return authors.map((author) => ({
      id: author.id,
      fullname: author.fullname,
      yearsoflife: author.yearsoflife,
    }));
  }

  async update(id: number, updateAuthorDto: CreateAuthorDto): Promise<Author> {
    await this.authorRepository.update(id, updateAuthorDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }
}
