import { Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(private readonly datasourceService: DatasourceService) {}

  create(book: Book): Book {
    this.datasourceService.getBooks().push(book);
    return book;
  }

  findAll(): Book[] {
    return this.datasourceService.getBooks();
  }

  findOne(id: number): Book | undefined {
    return this.datasourceService.getBooks().find((b) => b.id === id);
  }

  update(id: number, updatedBook: Book): Book | undefined {
    const index = this.datasourceService
      .getBooks()
      .findIndex((b) => b.id === id);
    if (index !== -1) {
      this.datasourceService.getBooks()[index] = updatedBook;
      return updatedBook;
    }
  }

  remove(id: number): boolean {
    const index = this.datasourceService
      .getBooks()
      .findIndex((b) => b.id === id);
    if (index !== -1) {
      this.datasourceService.getBooks().splice(index, 1);
      return true;
    }
    return false;
  }
}
