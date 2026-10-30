// const { getDateFormated } = require("../utils/dateFormated");
import { getDateFormated } from "../utils/dateFormated.js";
// const pdfListaPassageirosService = require("../services/listaPassageirosService");
import pdfListaPassageirosService from "../services/listaPassageirosService.js";
// const emailService = require("../services/emailService");
import emailService from "../services/emailService.js";

// const { PrismaClient } = require("../generated/prisma/client");
// const prisma = new PrismaClient();
import { prisma } from "../lib/prisma.js";

export const generatePDF = async (req, res) => {
  try {
    const {
      numeroCarro,
      placa,
      motorista,
      origem,
      destino,
      dataSaida,
      horaSaida,
      dataRetorno,
      horaRetorno,
      extensaoRoteiroKm,
      passageiros
    } = req.body.pdfData;

    const pdfName = req.body.pdfName;

    const dataGeracao = getDateFormated();
    const qtdPassageiros = passageiros.length;
    const numeroCarroP1 = numeroCarro.substring(0,4);
    const numeroCarroP2 = numeroCarro.substring(4,8);

    // buscar clientes e atualizar campo de última viagem
    const dataAtual = new Date();

    for (const passageiro of passageiros) {
      const documento = passageiro.documento;

      if (!documento) continue;

      const passageiroEncontrado = await prisma.passageiro.findFirst({
        where: {
          documento: documento
        }
      });

      if (passageiroEncontrado && passageiroEncontrado.clienteId) {
        await prisma.cliente.update({
          where: {
            id: passageiroEncontrado.clienteId
          },
          data: {
            ultimaViagem: dataAtual
          }
        });
      }
    }

    // transformar nomes em caixa alta
    passageiros.map(passageiro => {
      passageiro.nome = passageiro.nome.toUpperCase();
    });


    const pdfBuffer = await pdfListaPassageirosService.createPDF(
      numeroCarroP1,
      numeroCarroP2,
      placa,
      motorista,
      origem,
      destino,
      dataSaida,
      horaSaida,
      dataRetorno,
      horaRetorno,
      extensaoRoteiroKm,
      qtdPassageiros,
      passageiros,
      dataGeracao
    );

    // Configura os headers para o navegador reconhecer o arquivo como PDF
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="ficha-excursao.pdf"`);
    // Adiciona o header CORS para permitir a origem desejada
    const allowedOrigins = ['https://cvm-docs.vercel.app', 'http://localhost:4200'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
     res.setHeader("Access-Control-Allow-Origin", origin);
    }

    await emailService.enviarDocumentoGerado(pdfBuffer, `${process.env.EMAIL}`, 'Backup da lista de passageiros gerada', pdfName);

    // Envia o PDF para o cliente (frontend)
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    res.status(500).json({ error: "Erro ao gerar PDF" });
  }
};
