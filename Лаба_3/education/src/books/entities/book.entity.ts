import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Author } from '../../authors/entities/author.entity';
import { Genre } from '../../genres/entities/genre.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  stockQuantity!: number;

  @ManyToOne(() => Author, author => author.books)
  @JoinColumn({ name: 'author_id' })
  author!: Author;

  @ManyToOne(() => Genre, genre => genre.books)
  @JoinColumn({ name: 'genre_id' })
  genre!: Genre;
}