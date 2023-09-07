import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.API_PORT || 9324;

  await app.listen(port).then(() => {
    console.log(`OpenDentalSyncAPI started on port ${port}`);
  });
}
bootstrap();
