import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

function createTypeOrmOptions(): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [join(__dirname, '../**/**/*entity.{ts,js}')],
  };
}

export default registerAs('database', () => ({
  config: createTypeOrmOptions(),
}));
