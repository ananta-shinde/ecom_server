const express = require("express");
const cors = require("cors");
const app = express();

// midlewares
app.use(express.json());
app.use(cors());

