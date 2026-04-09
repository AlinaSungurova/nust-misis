import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { Author } from './entities/author.entity';
import { Book } from '../books/entities/book.entity';
import { Genre } from '../genres/entities/genre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Book, Genre])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
