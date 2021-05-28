const express = require("express");
const cors = require("cors");
const emailRoute = require("./src/routes/Email.route");
const cvRoute = require("./src/routes/CV.route");

const server = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/email", emailRoute);
  app.use("/cv", cvRoute);
  return app;
};

module.exports = server;
