-- CreateTable
CREATE TABLE "stickersUsers" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "stickerId" INTEGER NOT NULL,

    CONSTRAINT "stickersUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stickersUsers_userId_stickerId_key" ON "stickersUsers"("userId", "stickerId");

-- AddForeignKey
ALTER TABLE "stickersUsers" ADD CONSTRAINT "stickersUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stickersUsers" ADD CONSTRAINT "stickersUsers_stickerId_fkey" FOREIGN KEY ("stickerId") REFERENCES "stickers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
