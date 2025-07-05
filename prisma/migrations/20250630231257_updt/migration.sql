-- CreateTable
CREATE TABLE "video_comment" (
    "id" TEXT NOT NULL,
    "parentId" TEXT,
    "content" VARCHAR(5000) NOT NULL,
    "videoId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isPinned" BOOLEAN NOT NULL DEFAULT false,
    "isHidden" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "video_comment" ADD CONSTRAINT "video_comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "video_comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_comment" ADD CONSTRAINT "video_comment_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video_comment" ADD CONSTRAINT "video_comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
