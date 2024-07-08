import { Injectable } from '@nestjs/common';
import { IMemberServices } from './IMember.services';
import { CreateMemberSchema } from './schema/member.schema';
import { CreateMemberResponseDto, GetMemberResponseDto } from 'src/application/dtos/member.dtos';

@Injectable()
export class MemberService implements IMemberServices {
  async findById(id: string): Promise<GetMemberResponseDto> {
    return {
      id: id,
      name: "Notto Classic",
      email: "trisattawat.mekchay@kingpower.com"
    };
  }

  async createMember(data: CreateMemberSchema): Promise<CreateMemberResponseDto> {
    return data;
  }

}