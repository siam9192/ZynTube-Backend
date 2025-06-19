import { PrismaClient } from '../generated/prisma';

export default new PrismaClient({
  transactionOptions: {
    maxWait: 50000,
    timeout: 60000,
  },
});
