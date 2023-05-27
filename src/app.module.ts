import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/database/database.module';
import { TemperamentsModule } from './module/temperaments/temperaments.module';
import { BreedsModule } from './module/breeds/breeds.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    TemperamentsModule,
    BreedsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
