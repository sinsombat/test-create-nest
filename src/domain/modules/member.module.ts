import { Module } from '@nestjs/common';
import { MemberService } from '../services/member/member.service';
import { MemberController } from 'src/application/controller/member.controller';
import { RepositoriesModule } from 'src/infrastructure/repository/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [MemberController],
  providers: [
    {
      provide: 'IMemberServices',
      useClass: MemberService,
    },
  ],
  exports: ['IMemberServices'],
})
export class MemberModule {}
