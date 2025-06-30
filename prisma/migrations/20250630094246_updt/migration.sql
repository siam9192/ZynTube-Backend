-- CreateEnum
CREATE TYPE "VideoLikeType" AS ENUM ('LIKE', 'DISLIKE');

-- CreateTable
CREATE TABLE "video_likes" (
    "id" TEXT NOT NULL,
    "type" "VideoLikeType" NOT NULL,
    "videoId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_likes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "video_likes_videoId_userId_key" ON "video_likes"("videoId", "userId");
