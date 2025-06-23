-- CreateTable
CREATE TABLE "profile_changes" (
    "userId" TEXT NOT NULL,
    "lastChannelNameChange" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastChannelUniqueNameChange" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastChannelAboutChange" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastProfilePhotoChange" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastCoverPhotoChange" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profile_changes_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "profile_changes" ADD CONSTRAINT "profile_changes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
