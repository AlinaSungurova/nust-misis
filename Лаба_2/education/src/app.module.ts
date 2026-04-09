import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { GenresModule } from './genres/genres.module';
import { BooksModule } from './books/books.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [AuthorsModule, GenresModule, BooksModule, DatasourceModule],
})
export class AppModule {}
