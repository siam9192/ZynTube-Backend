-- AlterTable
ALTER TABLE "channel" ADD COLUMN     "subscribersCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "channel_subscriber" (
    "id" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "subscriberId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "channel_subscriber_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "channel_subscriber_channelId_subscriberId_key" ON "channel_subscriber"("channelId", "subscriberId");

-- AddForeignKey
ALTER TABLE "channel_subscriber" ADD CONSTRAINT "channel_subscriber_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "channel_subscriber" ADD CONSTRAINT "channel_subscriber_subscriberId_fkey" FOREIGN KEY ("subscriberId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
