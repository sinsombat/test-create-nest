import { Injectable } from '@nestjs/common';
import { Member } from '@prisma/client';
import { IMemberRepository } from './IMember.repository';
import { PrismaService } from 'src/infrastructure/persistence/prisma/prisma.service';
import { CreateMemberSchema } from 'src/domain/services/member/schema/member.schema';
// import { CreateMemberSchema } from 'src/domain/services/member/schema/member.schema';

@Injectable()
export class MemberRepository implements IMemberRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Member[]> {
    return this.prisma.member.findMany();
  }

  async findById(memberId: string): Promise<Member | null> {
    return this.prisma.member.findUnique({ where: { memberId: memberId } });
  }

  async create(data: CreateMemberSchema): Promise<Member> {
    const memberId = Math.floor(10000 + Math.random() * 90000).toString();
    return this.prisma.member.create({
      data: {
        ...data,
        memberId,
      },
    });
  }

  async update(id: number, member: Partial<Member>): Promise<Member> {
    return this.prisma.member.update({ where: { id }, data: member });
  }
}
