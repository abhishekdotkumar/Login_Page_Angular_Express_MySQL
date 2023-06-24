const express = require("express");
const controller = require("../controllers/contollers");
const routes = express.Router();

routes.post("/create-user", controller.createUser);

routes.post("/auth", controller.authenticateUser);

routes.get("/get-details", controller.getDetails);

module.exports = routes;
