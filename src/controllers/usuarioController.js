const bcrypt = require("bcryptjs");
const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

exports.criarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const hash = await bcrypt.hash(senha, 10);

    const usuarioExistente = await prisma.usuario.findFirst({
      where:{
        email: email
      }
    });

    if(usuarioExistente){
      return res.status(409).json({msg: 'Usuário existente com o email informado!'})
    }

    const novoUsuario = await prisma.usuario.create({
      data: { nome, email, senha: hash },
    });

    // Cria permissões padrão
    const modulos = [
      'calculadora',
      'orcamento',
      'orcamento-history',
      'clientes',
      'controle-contas',
      'lista-passageiros',
      'lista-passageiros-history',
      'contrato',
      'contrato-history',
      'recibo',
      'ficha-excursao',
      'passageiros',
      'utilitarios',
    ];

    await Promise.all(
      modulos.map((m) =>
        prisma.permissao.create({
          data: {
            usuarioId: novoUsuario.id,
            modulo: m,
            permitido: false,
          },
        })
      )
    );

    const usuarioComPermissoes = await prisma.usuario.findUnique({
      where: { id: novoUsuario.id },
      include: { permissoes: true },
    });

    res.json(usuarioComPermissoes);

  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário", details: error.message });
  }
};

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      where: { role: 'guest' },
      orderBy: { nome: 'asc' },
      include: {
        permissoes: {
          orderBy: { modulo: 'asc' }
        }
      }
    });

    if(!usuarios){
      return res.status(404).json({error: "Não existem usuários cadastrados"});
    }

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

exports.listarUsuarioPeloId = async (req, res) => {

  try {
    const usuario = await prisma.usuario.findFirst({
      where: {
        id: req.params.id
      }
    })

    if(!usuario){
      return res.status(404).json({error: "Não existe um usuário cadastrado com esse Id"});
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

exports.removerUsuarioPeloId = async (req, res) => {

  try {
    const usuario = await prisma.usuario.findFirst({
      where: {
        id: req.params.id
      }
    });

    if(!usuario){
      return res.status(404).json({error: "Não existe um usuário cadastrado com esse Id"});
    }

    if(usuario.role != 'admin'){
      await prisma.usuario.delete({
        where: {
          id: req.params.id
        }
      });
    } else {
      return res.status(403).json({error: "Não é possível remover o usuário administrador"});
    }

    res.status(200).json(`O usuário ${usuario.nome} foi removido com sucesso!`);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}


exports.alterarSenha = async (req, res) => {
  const { id, novaSenha } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { id } });
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const senhaHash = await bcrypt.hash(novaSenha, 10);

    await prisma.usuario.update({
      where: { id },
      data: {
        senha: senhaHash,
      },
    });

    res.json({ message: "Senha alterada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao alterar a senha" });
  }
};
