import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('data_replication')
export class DataReplicationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  timestamp: Date;
}
