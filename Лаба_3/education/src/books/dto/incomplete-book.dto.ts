import { ApiProperty } from '@nestjs/swagger';

export class IncompleteBookDto {
  @ApiProperty({ example: 1 })
  id!: number;

  @ApiProperty({ example: 'Война и мир' })
  title!: string;

  @ApiProperty({ example: 10 })
  stockQuantity!: number;
}
