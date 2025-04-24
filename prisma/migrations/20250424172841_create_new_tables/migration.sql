/*
  Warnings:

  - A unique constraint covering the columns `[clienteId]` on the table `Passageiro` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "TipoOperacao" AS ENUM ('ENTRADA', 'SAIDA');

-- CreateEnum
CREATE TYPE "FormaPagamento" AS ENUM ('PIX', 'DINHEIRO', 'CARTAO_DE_CREDITO');

-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "email" TEXT,
ADD COLUMN     "ultimaViagem" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Passageiro" ADD COLUMN     "clienteId" TEXT;

-- CreateTable
CREATE TABLE "Dependente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "documento" TEXT,
    "poltrona" TEXT,
    "clienteId" TEXT NOT NULL,
    "viagemId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dependente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FluxoCaixa" (
    "id" TEXT NOT NULL,
    "tipo" "TipoOperacao" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "formaPagamento" "FormaPagamento" NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FluxoCaixa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Viagem" (
    "id" TEXT NOT NULL,
    "dataViagem" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Viagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ViagemDependentes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ViagemDependentes_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ViagemPassageiros" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ViagemPassageiros_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ViagemDependentes_B_index" ON "_ViagemDependentes"("B");

-- CreateIndex
CREATE INDEX "_ViagemPassageiros_B_index" ON "_ViagemPassageiros"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Passageiro_clienteId_key" ON "Passageiro"("clienteId");

-- AddForeignKey
ALTER TABLE "Dependente" ADD CONSTRAINT "Dependente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passageiro" ADD CONSTRAINT "Passageiro_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ViagemDependentes" ADD CONSTRAINT "_ViagemDependentes_A_fkey" FOREIGN KEY ("A") REFERENCES "Dependente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ViagemDependentes" ADD CONSTRAINT "_ViagemDependentes_B_fkey" FOREIGN KEY ("B") REFERENCES "Viagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ViagemPassageiros" ADD CONSTRAINT "_ViagemPassageiros_A_fkey" FOREIGN KEY ("A") REFERENCES "Passageiro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ViagemPassageiros" ADD CONSTRAINT "_ViagemPassageiros_B_fkey" FOREIGN KEY ("B") REFERENCES "Viagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
