import { Member } from '@prisma/client';
import { CreateMemberResponseDto } from 'src/application/dtos/member.dtos';
import { CreateMemberSchema } from 'src/application/schema/member.schema';

export interface IMemberRepository {
  findAll(): Promise<Member[]>;
  findById(memberId: string): Promise<Member | null>;
  create(member: CreateMemberSchema): Promise<CreateMemberResponseDto>;
  update(id: number, member: Partial<Member>): Promise<Member>;
}
