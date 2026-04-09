import { ApiProperty } from '@nestjs/swagger';

export class IncompleteGenreDto {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'Фантастика' })
  name!: string;
}
