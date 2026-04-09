import { Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenresService {
  constructor(private readonly datasourceService: DatasourceService) {}

  create(genre: Genre): Genre {
    this.datasourceService.getGenres().push(genre);
    return genre;
  }

  findAll(): Genre[] {
    return this.datasourceService.getGenres();
  }

  findOne(id: number): Genre | undefined {
    return this.datasourceService.getGenres().find((g) => g.id === id);
  }

  update(id: number, updatedGenre: Genre): Genre | undefined {
    const index = this.datasourceService
      .getGenres()
      .findIndex((g) => g.id === id);
    if (index !== -1) {
      this.datasourceService.getGenres()[index] = updatedGenre;
      return updatedGenre;
    }
  }

  remove(id: number): boolean {
    const index = this.datasourceService
      .getGenres()
      .findIndex((g) => g.id === id);
    if (index !== -1) {
      this.datasourceService.getGenres().splice(index, 1);
      return true;
    }
    return false;
  }
}
