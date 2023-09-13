import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataReplicationUseCase } from 'src/domain/usecases/data-replication.usercase';
import { DataReplicationController } from 'src/infrastructure/http/controllers/data-replication.controller';
import { DataReplicationEntity } from 'src/infrastructure/persistence/entities/data-replication.entity';
import { DataReplicationRepository } from 'src/infrastructure/repositories/data-replication.service';

@Module({
  imports: [TypeOrmModule.forFeature([DataReplicationEntity])],
  controllers: [DataReplicationController],
  providers: [DataReplicationUseCase, DataReplicationRepository],
})
export class DataReplicationModule {}
