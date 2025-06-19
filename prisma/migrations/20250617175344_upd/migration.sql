/*
  Warnings:

  - The values [PC] on the enum `DeviceType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DeviceType_new" AS ENUM ('MOBILE', 'TABLET', 'DESKTOP', 'UNKNOWN');
ALTER TABLE "sessions_device" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "sessions_device" ALTER COLUMN "type" TYPE "DeviceType_new" USING ("type"::text::"DeviceType_new");
ALTER TYPE "DeviceType" RENAME TO "DeviceType_old";
ALTER TYPE "DeviceType_new" RENAME TO "DeviceType";
DROP TYPE "DeviceType_old";
ALTER TABLE "sessions_device" ALTER COLUMN "type" SET DEFAULT 'UNKNOWN';
COMMIT;
