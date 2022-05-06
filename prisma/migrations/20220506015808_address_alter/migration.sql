-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_profileId_fkey";

-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "profileId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
