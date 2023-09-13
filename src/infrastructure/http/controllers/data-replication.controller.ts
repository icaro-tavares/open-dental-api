import { Body, Controller, Post } from '@nestjs/common';
import { DataReplicationUseCase } from 'src/domain/usecases/data-replication.usercase';

@Controller('data-replication')
export class DataReplicationController {
  constructor(
    private readonly dataReplicationUseCase: DataReplicationUseCase,
  ) {}

  @Post()
  async handle(@Body() body: any): Promise<any> {
    try {
      return this.dataReplicationUseCase.execute(body);
    } catch (err) {
      return err.message;
    }
  }
}
