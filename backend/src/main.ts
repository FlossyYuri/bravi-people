import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Set Global Prefix For Versioning
  app.setGlobalPrefix('api/v1');
  await app.listen(5000);
}
bootstrap();
