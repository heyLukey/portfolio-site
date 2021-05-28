const path = require("path");
const express = require("express");
const server = require("./server");
const dotenv = require("dotenv");
dotenv.config();
const app = server();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
