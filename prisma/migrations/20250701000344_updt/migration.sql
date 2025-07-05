-- AlterTable
ALTER TABLE "video_comment" ADD COLUMN     "dislikesCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "likesCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "video_comment_reaction" (
    "id" TEXT NOT NULL,
    "type" "VideoReactionType" NOT NULL,
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_comment_reaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "video_comment_reaction_commentId_userId_key" ON "video_comment_reaction"("commentId", "userId");

-- AddForeignKey
ALTER TABLE "video_comment_reaction" ADD CONSTRAINT "video_comment_reaction_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "video_comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_comment_reaction" ADD CONSTRAINT "video_comment_reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
