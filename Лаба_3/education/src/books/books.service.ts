import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { Author } from '../authors/entities/author.entity';
import { Genre } from '../genres/entities/genre.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { IncompleteBookDto } from './dto/incomplete-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const [author, genre] = await Promise.all([
      this.authorRepository.findOne({ where: { id: createBookDto.authorId } }),
      this.genreRepository.findOne({ where: { id: createBookDto.genreId } }),
    ]);

    if (!author || !genre) {
      throw new Error('Author or Genre not found');
    }

    const book = new Book();
    book.title = createBookDto.title;
    book.stockQuantity = createBookDto.stockQuantity;
    book.author = author;
    book.genre = genre;

    const savedBook = await this.bookRepository.save(book);
    return savedBook;
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find({
      relations: ['author', 'genre'],
    });
  }

  async findOne(id: number): Promise<Book> {
    return await this.bookRepository.findOneOrFail({
      where: { id },
      relations: ['author', 'genre'],
    });
  }

  async findIncomplete(): Promise<IncompleteBookDto[]> {
    const books = await this.bookRepository.find();
    return books.map((book) => ({
      id: book.id,
      title: book.title,
      stockQuantity: book.stockQuantity,
    }));
  }

  async update(id: number, updateBookDto: CreateBookDto): Promise<Book> {
    await this.bookRepository.update(id, updateBookDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
