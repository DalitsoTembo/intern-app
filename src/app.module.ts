import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { internModule } from './hobbiton-intern/interns.module';

@Module({
  imports: [internModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
