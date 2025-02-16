const express = require("express");
const routes = express();
const {
  listUsers,
  findUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("./users-controllers/users");

routes.get("/users", listUsers);
routes.get("/users/:id", findUserById);
routes.post("/users", createUser);
routes.put("/users/:id", updateUserById);
routes.delete("/users/:id", deleteUserById);

module.exports = routes;
