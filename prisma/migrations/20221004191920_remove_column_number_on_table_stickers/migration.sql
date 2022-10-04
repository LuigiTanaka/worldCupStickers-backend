/*
  Warnings:

  - You are about to drop the column `number` on the `stickers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `stickers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "stickers_name_number_key";

-- AlterTable
ALTER TABLE "stickers" DROP COLUMN "number",
ALTER COLUMN "name" SET DATA TYPE VARCHAR(6);

-- CreateIndex
CREATE UNIQUE INDEX "stickers_name_key" ON "stickers"("name");
