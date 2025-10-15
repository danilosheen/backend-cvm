const { PrismaClient } = require('../src/generated/prisma/client');
const prisma = new PrismaClient();

async function main() {
  const emailAdmin = 'cvmturismojn@gmail.com';

  // Busca o admin existente
  const admin = await prisma.usuario.findUnique({
    where: { email: emailAdmin },
  });

  if (!admin) {
    console.log(`❌ Usuário com e-mail ${emailAdmin} não encontrado.`);
    return;
  }

  console.log(`✅ Usuário encontrado: ${admin.nome} (${admin.email})`);

  // Lista de módulos do sistema
  const modulos = [
    'home',
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
