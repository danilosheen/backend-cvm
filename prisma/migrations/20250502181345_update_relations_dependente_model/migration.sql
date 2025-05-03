/*
  Warnings:

  - A unique constraint covering the columns `[dependenteId]` on the table `Passageiro` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Dependente" DROP CONSTRAINT "Dependente_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Passageiro" DROP CONSTRAINT "Passageiro_clienteId_fkey";

-- AlterTable
ALTER TABLE "Passageiro" ADD COLUMN     "dependenteId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Passageiro_dependenteId_key" ON "Passageiro"("dependenteId");

-- AddForeignKey
ALTER TABLE "Dependente" ADD CONSTRAINT "Dependente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passageiro" ADD CONSTRAINT "Passageiro_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passageiro" ADD CONSTRAINT "Passageiro_dependenteId_fkey" FOREIGN KEY ("dependenteId") REFERENCES "Dependente"("id") ON DELETE CASCADE ON UPDATE CASCADE;
