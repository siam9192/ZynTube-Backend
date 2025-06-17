/*
  Warnings:

  - You are about to drop the column `draft` on the `videos` table. All the data in the column will be lost.
  - Added the required column `status` to the `videos` table without a default value. This is not possible if the table is not empty.
  - Made the column `title` on table `videos` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "VideoStatus" AS ENUM ('PROCESSING', 'UPLOADED', 'UPLOAD_FAILED', 'BLOCKED');

-- AlterTable
ALTER TABLE "videos" DROP COLUMN "draft",
ADD COLUMN     "status" "VideoStatus" NOT NULL,
ALTER COLUMN "url" DROP NOT NULL,
ALTER COLUMN "muxId" DROP NOT NULL,
ALTER COLUMN "title" SET NOT NULL;
