/*
  Warnings:

  - You are about to drop the column `sessionToken` on the `sessions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "sessions_sessionToken_idx";

-- DropIndex
DROP INDEX "sessions_sessionToken_key";

-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "sessionToken";
