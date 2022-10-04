-- CreateTable
CREATE TABLE "stickers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(3) NOT NULL,
    "number" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "stickers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stickers_name_number_key" ON "stickers"("name", "number");

-- AddForeignKey
ALTER TABLE "stickers" ADD CONSTRAINT "stickers_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
