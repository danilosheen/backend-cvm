// const nodemailer = require('nodemailer');
import nodemailer from "nodemailer";
// const fs = require("fs");
import fs from "fs";
// const path = require("path");
import path from "path";
// const handlebars = require("handlebars");
import handlebars from "handlebars";
// require('dotenv').config();
import "dotenv/config";
// const formatarNome = require("../utils/formatNomeCliente");
import { formatarNome } from "../utils/formatNomeCliente.js";
import {
  img_aniversario,
  icon_instagram,
  icon_youtube,
  icon_facebook,
  icon_whatsapp,
  icon_envelope,
  icon_phone,
  logo_word,
  logo_cvm
} from "../constantes/url.images.js";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar o transporte
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { 
    user: process.env.EMAIL, 
    pass: process.env.PASS 
  },
});

// Função para enviar e-mail
async function enviarEmailNotaAgradecimento(nomeCliente, destinatario, assunto) {
  try {
    const data = {
      nomeCliente,
      destinatario, 
      assunto,
      // Imagens
      logo_word,
      logo_cvm
    };

    const templateHtml = fs.readFileSync(
      path.join(__dirname, "../templates/nota-agradecimento-email.html"),
      "utf8"
    );
    const template = handlebars.compile(templateHtml);
    const html = template(data);

    const info = await transporter.sendMail({
      from: `"CVM Turismo" <${process.env.EMAIL}>`,
      to: destinatario,
      subject: assunto,
      html: `${html}` // Formato HTML
    });
    return info;
  } catch (error) {
    console.error("❌ Erro ao enviar email: ", error);
  }
}

async function enviarDocumentoGerado(documentoBuffer, destinatario, assunto, tipoDocumento) {
  try{
    const info = await transporter.sendMail({
      from: `"CVM Turismo - ${tipoDocumento}" <${process.env.EMAIL}>`,
      to: destinatario,
      subject: assunto,
      text: 'Segue a cópia do documento gerado em anexo.',
      attachments: [
        {
          filename: `${tipoDocumento}.pdf`,
          content: documentoBuffer,
          contentType: 'application/pdf'
        }
      ]
    });
    return info;
  } catch (error){
    console.error("❌ Erro ao enviar email: ", error);
  }
}

async function enviarFelizAniversario(nomeCliente, destinatario, assunto) {
  try {

    const nomeClienteFormatado = formatarNome.formatarNome(nomeCliente);

    const data = {
      nomeClienteFormatado,
      destinatario, 
      assunto,
      // Imagens
      img_aniversario,
      icon_instagram,
      icon_youtube,
      icon_facebook,
      icon_whatsapp,
      icon_envelope,
      icon_phone,
      logo_cvm
    };

    const templateHtml = fs.readFileSync(
      path.join(__dirname, "../templates/feliz-aniversario.html"),
      "utf8"
    );
    const template = handlebars.compile(templateHtml);
    const html = template(data);

    const info = await transporter.sendMail({
      from: `"CVM Turismo" <${process.env.EMAIL}>`,
      to: destinatario,
      subject: assunto,
      html: `${html}` // Formato HTML
    });
    return info;
  } catch (error) {
    console.error("❌ Erro ao enviar email: ", error);
  }
}

export default {
  enviarEmailNotaAgradecimento,
  enviarDocumentoGerado,
  enviarFelizAniversario
};
