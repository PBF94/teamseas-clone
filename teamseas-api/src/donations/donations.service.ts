import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { CreateDonationInput } from './dto/create-donation.input';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  create(createDonationInput: CreateDonationInput) {
    return this.prisma.donation.create({
      data: {
        ...createDonationInput,
      },
    });
  }

  findAll(orderBy?: { field?: string; direction?: string }) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return this.prisma.donation.findMany({
      orderBy: {
        [field]: direction,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.donation.findUnique({
      where: {
        id,
      },
    });
  }

  async getTotal() {
    const response = await this.prisma.donation.aggregate({
      _sum: {
        count: true,
      },
    });

    return response._sum.count;
  }
}
