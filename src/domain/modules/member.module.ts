import { Module } from '@nestjs/common';
import { MemberService } from '../services/member/member.service';
import { MemberController } from 'src/application/controller/member.controller';

@Module({
    imports: [],
    controllers: [MemberController],
    providers: [
        {
            provide: "IMemberServices",
            useClass: MemberService,
        }
    ],
    exports: ['IMemberServices'],
})
export class MemberModule {}
