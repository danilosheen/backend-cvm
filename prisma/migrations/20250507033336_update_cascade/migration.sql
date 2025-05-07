-- DropForeignKey
ALTER TABLE "Dependente" DROP CONSTRAINT "Dependente_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Passageiro" DROP CONSTRAINT "Passageiro_dependenteId_fkey";

-- AddForeignKey
ALTER TABLE "Dependente" ADD CONSTRAINT "Dependente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passageiro" ADD CONSTRAINT "Passageiro_dependenteId_fkey" FOREIGN KEY ("dependenteId") REFERENCES "Dependente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
