import { ApiProperty } from '@nestjs/swagger';

export class CreateGenreDto {
  @ApiProperty({ example: 'Фантастика' })
  name!: string;

  @ApiProperty({ example: 'Научная фантастика' })
  description!: string;
}
