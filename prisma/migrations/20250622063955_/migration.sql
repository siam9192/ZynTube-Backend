/*
  Warnings:

  - You are about to drop the `channels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profile_changes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions_device` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `video_settings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `video_states` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `videos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "channels" DROP CONSTRAINT "channels_userId_fkey";

-- DropForeignKey
ALTER TABLE "profile_changes" DROP CONSTRAINT "profile_changes_userId_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_userId_fkey";

-- DropForeignKey
ALTER TABLE "sessions_device" DROP CONSTRAINT "sessions_device_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "video_settings" DROP CONSTRAINT "video_settings_videoId_fkey";

-- DropForeignKey
ALTER TABLE "video_states" DROP CONSTRAINT "video_states_videoId_fkey";

-- DropForeignKey
ALTER TABLE "videos" DROP CONSTRAINT "videos_channelId_fkey";

-- DropTable
DROP TABLE "channels";

-- DropTable
DROP TABLE "profile_changes";

-- DropTable
DROP TABLE "sessions";

-- DropTable
DROP TABLE "sessions_device";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "video_settings";

-- DropTable
DROP TABLE "video_states";

-- DropTable
DROP TABLE "videos";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "setupStatus" BOOLEAN NOT NULL DEFAULT false,
    "lastLoginAt" TIMESTAMP(3) NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "browser" TEXT NOT NULL DEFAULT 'Unknown',
    "ip" TEXT NOT NULL DEFAULT 'Unknown',
    "userAgent" TEXT,
    "lastSeen" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session_device" (
    "sessionId" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "type" "DeviceType" NOT NULL DEFAULT 'UNKNOWN',
    "osName" TEXT NOT NULL DEFAULT 'Unknown',
    "osVersion" TEXT NOT NULL DEFAULT 'Unknown',

    CONSTRAINT "session_device_pkey" PRIMARY KEY ("sessionId")
);

-- CreateTable
CREATE TABLE "channel" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "uniqueName" TEXT NOT NULL,
    "profilePhotoUrl" TEXT NOT NULL,
    "profileCoverPhotoUrl" TEXT,
    "about" VARCHAR(2000),
    "viewsCount" INTEGER NOT NULL DEFAULT 0,
    "status" "ChannelStatus" NOT NULL DEFAULT 'ACTIVE',
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "channel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_change" (
    "userId" TEXT NOT NULL,
    "lastChannelNameChange" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastChannelUniqueNameChange" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastChannelAboutChange" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastProfilePhotoChange" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastCoverPhotoChange" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profile_change_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "video" (
    "id" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(5000),
    "status" "VideoStatus" NOT NULL DEFAULT 'PROCESSING',
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "video_media" (
    "videoId" TEXT NOT NULL,
    "muxId" TEXT NOT NULL,
    "imagekitId" TEXT NOT NULL,
    "videoUrl" TEXT,
    "thumbnailUrl" TEXT NOT NULL,

    CONSTRAINT "video_media_pkey" PRIMARY KEY ("videoId")
);

-- CreateTable
CREATE TABLE "video_state" (
    "videoId" TEXT NOT NULL,
    "viewsCount" INTEGER NOT NULL DEFAULT 0,
    "likesCount" INTEGER NOT NULL DEFAULT 0,
    "dislikesCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "video_state_pkey" PRIMARY KEY ("videoId")
);

-- CreateTable
CREATE TABLE "video_setting" (
    "videoId" TEXT NOT NULL,
    "disableComments" BOOLEAN NOT NULL DEFAULT false,
    "commentAudience" "CommentAudience" NOT NULL DEFAULT 'EVERYONE',
    "disableLikes" BOOLEAN NOT NULL DEFAULT false,
    "disableSharing" BOOLEAN NOT NULL DEFAULT false,
    "privacy" "VideoPrivacy" NOT NULL DEFAULT 'PUBLIC',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_setting_pkey" PRIMARY KEY ("videoId")
);

-- CreateIndex
CREATE INDEX "session_userId_idx" ON "session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "channel_userId_key" ON "channel"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "channel_uniqueName_key" ON "channel"("uniqueName");

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session_device" ADD CONSTRAINT "session_device_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "channel" ADD CONSTRAINT "channel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_change" ADD CONSTRAINT "profile_change_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video" ADD CONSTRAINT "video_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_media" ADD CONSTRAINT "video_media_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_state" ADD CONSTRAINT "video_state_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_setting" ADD CONSTRAINT "video_setting_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE CASCADE ON UPDATE CASCADE;
