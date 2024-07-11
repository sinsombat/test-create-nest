import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/persistence/prisma/prisma.service';
import { MemberRepository } from './member/member.repository';
import { MEMBER_REPOSITORY } from 'src/common/shared/common';

@Module({
  providers: [
    PrismaService,
    {
      provide: MEMBER_REPOSITORY,
      useClass: MemberRepository,
    },
  ],
  exports: [MEMBER_REPOSITORY],
})
export class RepositoriesModule {}
