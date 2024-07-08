import { Module } from '@nestjs/common';
import { MemberModule } from './domain/modules/member.module';

@Module({
    imports: [MemberModule],
})
export class AppModule {}
