/*
  Warnings:

  - You are about to alter the column `viewsCount` on the `channels` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `viewsCount` on the `videos` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `likesCount` on the `videos` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `dislikesCount` on the `videos` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "channels" ALTER COLUMN "viewsCount" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "videos" ALTER COLUMN "viewsCount" SET DATA TYPE INTEGER,
ALTER COLUMN "likesCount" SET DATA TYPE INTEGER,
ALTER COLUMN "dislikesCount" SET DATA TYPE INTEGER;
