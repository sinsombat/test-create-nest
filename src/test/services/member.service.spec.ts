import { Test, TestingModule } from '@nestjs/testing';
import { MemberService } from '../../application/services/member/member.service';
import { IMemberRepository } from '../../infrastructure/repository/member/IMember.repository';
import { IMemberServices } from '../../application/services/member/IMember.services';
import { MEMBER_REPOSITORY } from '../../common/shared/common';
import { GetMemberResponseDto } from '../../application/dtos/member.dtos';

describe('MemberService', () => {
  let service: IMemberServices;
  let repository: IMemberRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MemberService,
        {
          provide: MEMBER_REPOSITORY,
          useValue: {
            findById: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<IMemberServices>(MemberService);
    repository = module.get<IMemberRepository>(MEMBER_REPOSITORY);
  });

  describe('findById', () => {
    it('should return a member if found', async () => {
      const memberId = '25552';
      const member = {
        id: 1,
        memberId: '123213',
        name: 'Wiriya Au',
        email: 'wiriya.a@kingpower.com',
        age: '30',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(repository, 'findById').mockResolvedValue(member);

      const result = await service.findById(memberId);
      expect(result).toEqual(GetMemberResponseDto.fromEntity(member));
    });

    it('should return null if member not found', async () => {
      const memberId = 'test-id';
      jest.spyOn(repository, 'findById').mockResolvedValue(null);

      const result = await service.findById(memberId);
      expect(result).toBeNull();
    });
  });
});
