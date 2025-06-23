/*
  Warnings:

  - You are about to drop the column `muxId` on the `video_media` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "video_media" DROP COLUMN "muxId",
ADD COLUMN     "muxAssetId" TEXT,
ADD COLUMN     "muxPlaybackId" TEXT;
