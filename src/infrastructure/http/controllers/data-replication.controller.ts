import { Controller, Get } from '@nestjs/common';
import { readFileSync } from 'fs';
import { DataReplicationUseCase } from 'src/domain/usecases/data-replication.usercase';

@Controller('data-replication')
export class DataReplicationController {
  constructor(
    private readonly dataReplicationUseCase: DataReplicationUseCase,
  ) {}

  @Get()
  async handle(): Promise<any> {
    try {
      const file = await readFileSync('./data.json');
      return this.dataReplicationUseCase.execute(JSON.parse(file.toString()));
    } catch (err) {
      return err.message;
    }
  }
}
