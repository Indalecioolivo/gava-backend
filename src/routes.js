const express = require("express");
const routes = express();
const {
  listUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("./users-controllers/users");

routes.get("/users", listUsers);
routes.get("/users/:id", findUserById);
routes.post("/users", createUser);
routes.patch("/users/:id", updateUser);
routes.delete("/users/:id", deleteUser);

module.exports = routes;
