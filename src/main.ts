import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'body-parser';

async function bootstrap() {
  const port = process.env.API_PORT || 9324;

  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '300mb' }));
  app.use(urlencoded({ limit: '300mb', extended: true }));

  await app.listen(port).then(() => {
    console.log(`OpenDentalSyncAPI started on port ${port}`);
  });
}
bootstrap();
