import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MemberModule } from './domain/modules/member.module';

@Module({
  imports: [ConfigModule.forRoot(), MemberModule],
})
export class AppModule {}
