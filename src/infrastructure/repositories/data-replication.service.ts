import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class DataReplicationRepository {
  constructor(private readonly entityManager: EntityManager) {}

  async upsertData(
    clinicId: string,
    tableName: string,
    data: any[],
    primaryKeys: string[],
  ) {
    for (const record of data) {
      const columns = Object.keys(record);
      columns.push('ClinicSyncId');

      const values = Object.values(record);
      values.push(clinicId);

      const insertColumns = columns.join(', ');
      const insertValues = columns.map(() => '?').join(', ');
      const updateColumns = primaryKeys
        .map((column) => `${column} = VALUES(${column})`)
        .join(', ');

      const query = `
        INSERT INTO tb_${tableName} (${insertColumns})
        VALUES (${insertValues})
        ON DUPLICATE KEY UPDATE ${updateColumns};
      `;

      await this.entityManager.query(query, values);
    }
  }
}
