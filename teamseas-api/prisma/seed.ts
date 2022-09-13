import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.donation.deleteMany();

  const johnDoe = await prisma.donation.create({
    data: {
      email: 'john@doe.ro',
      displayName: 'John Doe',
      count: 10,
    },
  });

  console.log({ johnDoe });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
