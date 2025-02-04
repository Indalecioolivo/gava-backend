const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const listUsers = async (req, res) => {
  res.send("Todos os usuários");
};

const findUserById = (req, res) => {
  res.send("Buscar usuário por ID");
};

const createUser = (req, res) => {
  res.send("Criar usuário");
};

const updateUser = (req, res) => {
  res.send("Atualizar usuário");
};

const deleteUser = (req, res) => {
  res.send("Deletar usuário");
};

module.exports = {
  listUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
};
