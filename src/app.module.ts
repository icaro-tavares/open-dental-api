import { Module } from '@nestjs/common';
import { DataReplicationModule } from './infrastructure/modules/data-replication.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      name: 'default',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get<TypeOrmModuleOptions>('database.config'),
    }),
    DataReplicationModule,
  ],
})
export class AppModule {}
