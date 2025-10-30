const { PrismaClient } = require('../src/generated/prisma/client');
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

async function main() {
  const nomeAdmin = process.env.NOME_ADMIN;
  const emailAdmin = process.env.EMAIL_ADMIN;
  const senhaAdmin = process.env.SENHA_ADMIN;
  const roleAdmin = process.env.ROLE_ADMIN;

  const hash = await bcrypt.hash(senhaAdmin, 10);

  // Busca o admin existente
  const admin = await prisma.usuario.findUnique({
    where: { email: emailAdmin },
  });

  if (!admin) {
    await prisma.usuario.create({
      data: { nome: nomeAdmin, email: emailAdmin, senha: hash, role: roleAdmin},
    });
  }

  console.log(`✅ Usuário encontrado: ${admin.nome} (${admin.email})`);

  // Lista de módulos do sistema
  const modulos = [
    'home',
    'gerenciar-usuarios',
    'ficha-excursao',
    'contrato',
    'contrato-history',
    'orcamento',
    'orcamento-history',
    'recibo',
    'controle-contas',
    'lista-passageiros',
    'lista-passageiros-history',
    'clientes',
    'passageiros',
    'calculadora',
    'utilitarios',
    'aniversariantes',
    'nota-agradecimento',
  ];

  // Remove permissões antigas
  await prisma.permissao.deleteMany({
    where: { usuarioId: admin.id },
  });

  // Cria permissões novas (todas liberadas)
  const permissoes = modulos.map((modulo) => ({
    modulo,
    permitido: true,
    usuarioId: admin.id,
  }));

  await prisma.permissao.createMany({ data: permissoes });

  console.log(`✅ ${modulos.length} permissões atualizadas para ${admin.email}`);

}

main()
  .catch((e) => {
    console.error('❌ Erro ao executar o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
