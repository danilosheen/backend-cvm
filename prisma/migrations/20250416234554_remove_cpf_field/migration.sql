/*
  Warnings:

  - You are about to drop the column `cpf` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `typeDocumentSelected` to the `Passageiro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "cpf",
ADD COLUMN     "typeDocumentSelected" TEXT;

-- AlterTable
ALTER TABLE "Passageiro" ADD COLUMN     "typeDocumentSelected" TEXT NOT NULL;
