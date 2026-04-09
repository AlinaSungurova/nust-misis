import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';
import { DatasourceModule } from '../datasource/datasource.module';

@Module({
  imports: [DatasourceModule],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}
