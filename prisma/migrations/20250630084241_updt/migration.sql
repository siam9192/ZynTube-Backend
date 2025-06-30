-- CreateEnum
CREATE TYPE "PlaylistType" AS ENUM ('DEFAULT', 'CUSTOM');

-- CreateEnum
CREATE TYPE "DefaultPlaylist" AS ENUM ('SAVED', 'WATCH_LATER', 'WATCH_HISTORY');

-- CreateEnum
CREATE TYPE "Privacy" AS ENUM ('PUBLIC', 'PRIVATE');

-- CreateTable
CREATE TABLE "playlist" (
    "id" TEXT NOT NULL,
    "type" "PlaylistType" NOT NULL,
    "name" TEXT,
    "defaultType" "DefaultPlaylist",
    "userId" TEXT NOT NULL,
    "privacy" "Privacy" NOT NULL DEFAULT 'PRIVATE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playlist_video" (
    "id" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "playlist_video_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "playlist_userId_defaultType_key" ON "playlist"("userId", "defaultType");

-- CreateIndex
CREATE UNIQUE INDEX "playlist_video_playlistId_videoId_key" ON "playlist_video"("playlistId", "videoId");

-- AddForeignKey
ALTER TABLE "playlist" ADD CONSTRAINT "playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "playlist_video" ADD CONSTRAINT "playlist_video_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "playlist_video" ADD CONSTRAINT "playlist_video_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
