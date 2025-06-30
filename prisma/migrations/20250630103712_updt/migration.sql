/*
  Warnings:

  - You are about to drop the `video_likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "VideoReactionType" AS ENUM ('LIKE', 'DISLIKE');

-- DropTable
DROP TABLE "video_likes";

-- DropEnum
DROP TYPE "VideoLikeType";

-- CreateTable
CREATE TABLE "video_reaction" (
    "id" TEXT NOT NULL,
    "type" "VideoReactionType" NOT NULL,
    "videoId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_reaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "video_reaction_videoId_userId_key" ON "video_reaction"("videoId", "userId");
