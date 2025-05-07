/*
  Warnings:

  - A unique constraint covering the columns `[documento]` on the table `Dependente` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Dependente" DROP CONSTRAINT "Dependente_clienteId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Dependente_documento_key" ON "Dependente"("documento");

-- AddForeignKey
ALTER TABLE "Dependente" ADD CONSTRAINT "Dependente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
