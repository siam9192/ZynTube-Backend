-- DropForeignKey
ALTER TABLE "video_comment" DROP CONSTRAINT "video_comment_parentId_fkey";

-- AddForeignKey
ALTER TABLE "video_comment" ADD CONSTRAINT "video_comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "video_comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
