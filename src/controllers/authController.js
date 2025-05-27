const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("../generated/prisma/client");
const prisma = new PrismaClient();

const SECRET = process.env.JWT_SECRET;

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await prisma.usuario.findUnique({
      where: { email },
    });    

    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: "Senha inválida" });
    }

    const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: "31d" });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Erro no login", details: error.message });
  }
};
