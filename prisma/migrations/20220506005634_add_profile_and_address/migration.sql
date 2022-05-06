-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "addressId" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "zipCode" INTEGER NOT NULL,
    "ddd" INTEGER NOT NULL,
    "telephone" TEXT NOT NULL,
    "publicPlace" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_profileId_key" ON "Address"("profileId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
