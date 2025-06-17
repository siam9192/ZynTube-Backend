/*
  Warnings:

  - Added the required column `browser` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `device` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "browser" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "device" TEXT NOT NULL,
ADD COLUMN     "ip" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
