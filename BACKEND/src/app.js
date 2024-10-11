const express = require("express");
const app = express();
const routes = require("./routes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

app.use("/api", routes);

app.use(logger);

app.use(errorHandler);

module.exports = app;
