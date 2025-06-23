import { PrismaClient } from "../../../prisma/generated/client";


export default new PrismaClient({
  transactionOptions: {
    maxWait: 50000,
    timeout: 60000,
  },
});
