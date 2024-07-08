import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiCommonResponses } from 'src/common/utils/swagger-response-helper';
import { IMemberServices } from 'src/domain/services/member/IMember.services';
import { CreateMemberResponseDto, GetMemberResponseDto } from '../dtos/member.dtos';
import { CreateMemberSchema } from 'src/domain/services/member/schema/member.schema';

@ApiTags('Member')
@ApiCommonResponses('Member')
@Controller('member')
export class MemberController {
    constructor(
        @Inject('IMemberServices')
        private readonly memberServices: IMemberServices
    ) {}

    @Get(':id')
    @ApiOkResponse({ type: GetMemberResponseDto })
    async getMemberById(@Param('id') id: string) {
        return this.memberServices.findById(id);
    }

    @Post('/')
    @ApiCreatedResponse({type: CreateMemberResponseDto})
    async createMember(@Body() body: CreateMemberSchema ) {
        return this.memberServices.createMember(body);
    }
}