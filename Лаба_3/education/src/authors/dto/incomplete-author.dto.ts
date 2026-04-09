import { ApiProperty } from '@nestjs/swagger';

export class IncompleteAuthorDto {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'Пушкин А.С.' })
  fullname!: string;

  @ApiProperty({ example: '1799-1837' })
  yearsoflife!: string;
}
