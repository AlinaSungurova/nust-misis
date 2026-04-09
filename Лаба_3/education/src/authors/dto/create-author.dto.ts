import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({ example: 'Пушкин А.С.' })
  fullname!: string;

  @ApiProperty({ example: '1799-1837' })
  yearsoflife!: string;
}
