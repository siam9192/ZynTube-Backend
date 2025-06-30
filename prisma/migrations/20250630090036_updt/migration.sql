/*
  Warnings:

  - You are about to drop the column `defaultType` on the `playlist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,name]` on the table `playlist` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `playlist` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "playlist_userId_defaultType_key";

-- AlterTable
ALTER TABLE "playlist" DROP COLUMN "defaultType",
ALTER COLUMN "name" SET NOT NULL;

-- DropEnum
DROP TYPE "DefaultPlaylist";

-- CreateIndex
CREATE UNIQUE INDEX "playlist_userId_name_key" ON "playlist"("userId", "name");
