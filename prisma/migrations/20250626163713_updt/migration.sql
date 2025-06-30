-- DropForeignKey
ALTER TABLE "video_media" DROP CONSTRAINT "video_media_videoId_fkey";

-- AlterTable
ALTER TABLE "video" ALTER COLUMN "resolutionTier" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "video_media" ADD CONSTRAINT "video_media_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE CASCADE ON UPDATE CASCADE;
