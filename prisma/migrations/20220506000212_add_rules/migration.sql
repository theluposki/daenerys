-- CreateTable
CREATE TABLE "Rules" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'user',
    "userId" TEXT NOT NULL,

    CONSTRAINT "Rules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rules" ADD CONSTRAINT "Rules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
