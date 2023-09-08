import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataReplicationUseCase } from 'src/domain/usecases/data-replication.usercase';
import { DataReplicationController } from 'src/infrastructure/http/controllers/data-replication.controller';
import { DataReplicationEntity } from 'src/infrastructure/persistence/entities/data-replication.entity';
import { DataReplicationService } from 'src/infrastructure/services/data-replication.service';

@Module({
  imports: [TypeOrmModule.forFeature([DataReplicationEntity])],
  controllers: [DataReplicationController],
  providers: [DataReplicationUseCase, DataReplicationService],
})
export class DataReplicationModule {}
