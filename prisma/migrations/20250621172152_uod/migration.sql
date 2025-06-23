/*
  Warnings:

  - You are about to drop the column `dislikesCount` on the `videos` table. All the data in the column will be lost.
  - You are about to drop the column `likesCount` on the `videos` table. All the data in the column will be lost.
  - You are about to drop the column `privacy` on the `videos` table. All the data in the column will be lost.
  - You are about to drop the column `viewsCount` on the `videos` table. All the data in the column will be lost.
  - Added the required column `thumbnailUrl` to the `videos` table without a default value. This is not possible if the table is not empty.
  - Made the column `muxId` on table `videos` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "CommentAudience" AS ENUM ('EVERYONE', 'SUBSCRIBERS', 'NONE');

-- AlterTable
ALTER TABLE "videos" DROP COLUMN "dislikesCount",
DROP COLUMN "likesCount",
DROP COLUMN "privacy",
DROP COLUMN "viewsCount",
ADD COLUMN     "thumbnailUrl" TEXT NOT NULL,
ALTER COLUMN "muxId" SET NOT NULL;

-- CreateTable
CREATE TABLE "video_states" (
    "videoId" TEXT NOT NULL,
    "viewsCount" INTEGER NOT NULL DEFAULT 0,
    "likesCount" INTEGER NOT NULL DEFAULT 0,
    "dislikesCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "video_states_pkey" PRIMARY KEY ("videoId")
);

-- CreateTable
CREATE TABLE "video_settings" (
    "videoId" TEXT NOT NULL,
    "disableComments" BOOLEAN NOT NULL DEFAULT false,
    "commentAudience" "CommentAudience" NOT NULL DEFAULT 'EVERYONE',
    "disableLikes" BOOLEAN NOT NULL DEFAULT false,
    "disableSharing" BOOLEAN NOT NULL DEFAULT false,
    "privacy" "VideoPrivacy" NOT NULL DEFAULT 'PUBLIC',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_settings_pkey" PRIMARY KEY ("videoId")
);

-- AddForeignKey
ALTER TABLE "video_states" ADD CONSTRAINT "video_states_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "videos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_settings" ADD CONSTRAINT "video_settings_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "videos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
