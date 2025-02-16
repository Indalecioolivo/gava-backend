const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {
  validateEmail,
  validatePassword,
  validateFirstName,
  validateLastName,
} = require("../validations/userValidations");

const createUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const validEmail = await validateEmail(email);
  if (!validEmail.valid) {
    return res.status(400).json({ error: validEmail.error });
  }
  const validPassword = validatePassword(password);
  if (!validPassword.valid) {
    return res.status(400).json({ error: validPassword.error });
  }
  const validFirstName = validateFirstName(firstName);
  if (!validFirstName.valid) {
    return res.status(400).json({ error: validFirstName.error });
  }
  const validLastName = validateLastName(lastName);
  if (!validLastName.valid) {
    return res.status(400).json({ error: validLastName.error });
  }

  try {
    await prisma.users.create({
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });
  } catch (error) {
    return res.status(400).json(error);
  }

  return res.status(201).json({ message: "Usuário criado com sucesso" });
};

const listUsers = async (req, res) => {
  let result;
  try {
    result = await prisma.users.findMany();
  } catch (error) {
    res.status(400).json(error);
  }
  return res.status(200).json(result);
};

const findUserById = async (req, res) => {
  let { id } = req.params;

  try {
    id = Number(id);
  } catch (error) {
    return res.status(400).json({ error: "O id deve ser um número" });
  }

  try {
    const result = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUserById = async (req, res) => {
  let { id } = req.params;
  let user;

  try {
    user = await prisma.users.findUnique({
      where: {
        id: Number(id),
      },
    });
  } catch (error) {
    return res.status(400).json({ error: "Erro ao buscar o usuário." });
  }

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado." });
  }

  let { email, password, firstName, lastName } = req.body;
  const validEmail = await validateEmail(email);
  if (!validEmail.valid) {
    return res.status(400).json({ error: validEmail.error });
  }

  const validPassword = validatePassword(password);
  if (!validPassword.valid) {
    return res.status(400).json({ error: validPassword.error });
  }

  const validFirstName = validateFirstName(firstName);
  if (!validFirstName.valid) {
    return res.status(400).json({ error: validFirstName.error });
  }

  const validLastName = validateLastName(lastName);
  if (!validLastName.valid) {
    return res.status(400).json({ error: validLastName.error });
  }

  try {
    await prisma.users.update({
      where: {
        id: Number(id),
      },
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });
  } catch (error) {
    return res.status(400).json(error);
  }

  return res.status(200).json({ message: "Usuário editado com sucesso." });
};

const deleteUserById = async (req, res) => {
  let { id } = req.params;

  try {
    await prisma.users.delete({
      where: {
        id: Number(id),
      },
    });
  } catch (error) {
    return res.status(400).json({ error: "Erro ao excluir o usuário." });
  }

  return res.status(200).json({ message: "Usuário excluído com sucesso" });
};

module.exports = {
  listUsers,
  findUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
