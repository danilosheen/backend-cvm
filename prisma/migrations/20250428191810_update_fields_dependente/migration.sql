/*
  Warnings:

  - You are about to drop the column `poltrona` on the `Dependente` table. All the data in the column will be lost.
  - You are about to drop the column `viagemId` on the `Dependente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Dependente" DROP COLUMN "poltrona",
DROP COLUMN "viagemId";
