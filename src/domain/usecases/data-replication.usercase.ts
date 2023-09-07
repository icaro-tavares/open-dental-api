import { Injectable } from '@nestjs/common';
import { DataReplicationService } from 'src/infrastructure/services/data-replication.service';

type PrimaryKeys = string[];
type TableInfo = { primaryKeys: PrimaryKeys };

type ReplicationTableInfo = {
  [key: string]: TableInfo;
};

@Injectable()
export class DataReplicationUseCase {
  constructor(private readonly dataReplicationService: DataReplicationService) {}

  async execute(data: any): Promise<void> {
    const tableInfo = await this.getTableInfo();

    const { clinicId, rows } = data;

    for (const tableName of Object.keys(rows)) {
      if (tableInfo[tableName]) {
        const primaryKeys = tableInfo[tableName].primaryKeys;
        const records = rows[tableName];

        await this.dataReplicationService.upsertData(
          clinicId,
          tableName,
          records,
          primaryKeys,
        );
      } else {
        console.log(`Table ${tableName} not found`);
      }
    }
  }

  private async getTableInfo(): Promise<ReplicationTableInfo> {
    return {
      patient: { primaryKeys: ["PatNum", "ClinicSyncId"] },
      appointment: { primaryKeys: ["AptNum", "ClinicSyncId"] },
      referral: { primaryKeys: ["ReferralNum", "ClinicSyncId"] },
      insplan: { primaryKeys: ["PlanNum", "ClinicSyncId"] },
      inssub: { primaryKeys: ["InsSubNum", "ClinicSyncId"] },
      patplan: { primaryKeys: ["PatPlanNum", "ClinicSyncId"] },
      commlog: { primaryKeys: ["CommlogNum", "ClinicSyncId"] },
      definition: { primaryKeys: ["DefNum", "ClinicSyncId"] },
      refattach: { primaryKeys: ["RefAttachNum", "ClinicSyncId"] },
    };
  }
}
