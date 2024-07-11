import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/persistence/prisma/prisma.service';
import { MemberRepository } from './member/member.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: 'IMemberRepository',
      useClass: MemberRepository,
    },
  ],
  exports: ['IMemberRepository'],
})
export class RepositoriesModule {}
