import { Module } from '@nestjs/common';
import { MemberService } from '../../application/services/member/member.service';
import { MemberController } from 'src/application/controller/member.controller';
import { RepositoriesModule } from 'src/infrastructure/repository/repositories.module';
import { MEMBER_SERVICE } from 'src/common/shared/common';

@Module({
  imports: [RepositoriesModule],
  controllers: [MemberController],
  providers: [
    {
      provide: MEMBER_SERVICE,
      useClass: MemberService,
    },
  ],
  exports: [MEMBER_SERVICE],
})
export class MemberModule {}
