import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'Война и мир' })
  title!: string;

  @ApiProperty({ example: 10 })
  stockQuantity!: number;

  @ApiProperty({ example: 1 })
  authorId!: number;

  @ApiProperty({ example: 1 })
  genreId!: number;
}
