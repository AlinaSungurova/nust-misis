import { Injectable } from '@nestjs/common';
import { Author } from '../authors/entities/author.entity';
import { Genre } from '../genres/entities/genre.entity';
import { Book } from '../books/entities/book.entity';

@Injectable()
export class DatasourceService {
  private authors: Author[] = [];
  private genres: Genre[] = [];
  private books: Book[] = [];

  getAuthors(): Author[] {
    return this.authors;
  }
  getGenres(): Genre[] {
    return this.genres;
  }
  getBooks(): Book[] {
    return this.books;
  }
}
