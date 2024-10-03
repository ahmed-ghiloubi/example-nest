import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Enable transformation globally
      whitelist: true, // Remove unknown properties
      forbidNonWhitelisted: true, // Throw error when unknown properties are found
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        const formatError = (error: ValidationError) => {
          if (error.children?.length) {
            return {
              field: error.property,
              errors: error.children.map(formatError),
            };
          }
          return {
            field: error.property,
            errors: Object.values(error.constraints ?? {}),
          };
        };

        return new BadRequestException(
          validationErrors.map((error) => formatError(error)),
        );
      },
    }),
  );

  await app.listen(4000);
}
bootstrap();
