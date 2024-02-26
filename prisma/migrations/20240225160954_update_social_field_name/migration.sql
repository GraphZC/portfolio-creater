/*
  Warnings:

  - You are about to drop the column `socialName` on the `Social` table. All the data in the column will be lost.
  - You are about to drop the column `socialUrl` on the `Social` table. All the data in the column will be lost.
  - Added the required column `name` to the `Social` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Social` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Social" DROP COLUMN "socialName",
DROP COLUMN "socialUrl",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
