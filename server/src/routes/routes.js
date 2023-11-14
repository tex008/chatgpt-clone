const express = require("express");

const promptController = require("../controller/prompt-controller");

const routes = express.Router();

routes.post("/send-text", promptController.sendText);

module.exports = routes;
