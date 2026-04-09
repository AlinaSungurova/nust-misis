import { Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(private readonly datasourceService: DatasourceService) {}

  create(author: Author): Author {
    this.datasourceService.getAuthors().push(author);
    return author;
  }

  findAll(): Author[] {
    return this.datasourceService.getAuthors();
  }

  findOne(id: number): Author | undefined {
    return this.datasourceService.getAuthors().find((a) => a.id === id);
  }

  update(id: number, updatedAuthor: Author): Author | undefined {
    const index = this.datasourceService
      .getAuthors()
      .findIndex((a) => a.id === id);
    if (index !== -1) {
      this.datasourceService.getAuthors()[index] = updatedAuthor;
      return updatedAuthor;
    }
  }

  remove(id: number): boolean {
    const index = this.datasourceService
      .getAuthors()
      .findIndex((a) => a.id === id);
    if (index !== -1) {
      this.datasourceService.getAuthors().splice(index, 1);
      return true;
    }
    return false;
  }
}
