/*
  Warnings:

  - You are about to drop the `Channel` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email,status]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Channel" DROP CONSTRAINT "Channel_userId_fkey";

-- DropTable
DROP TABLE "Channel";

-- CreateTable
CREATE TABLE "channels" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "uniqueName" TEXT NOT NULL,
    "profilePhotoUrl" TEXT NOT NULL,
    "profileCoverPhotoUrl" TEXT,
    "about" VARCHAR(2000) NOT NULL,
    "viewsCount" BIGINT NOT NULL DEFAULT 0,
    "status" "ChannelStatus" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "channels_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "channels_userId_key" ON "channels"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "channels_uniqueName_key" ON "channels"("uniqueName");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_status_key" ON "users"("email", "status");

-- AddForeignKey
ALTER TABLE "channels" ADD CONSTRAINT "channels_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
