// prisma/prisma.module.ts

import { Module, OnModuleDestroy } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule implements OnModuleDestroy {
  constructor(private readonly prismaService: PrismaService) {}

  async onModuleDestroy() {
    await this.prismaService.onModuleDestroy();
  }
}
