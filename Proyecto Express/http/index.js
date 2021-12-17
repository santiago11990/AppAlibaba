const express = require("express");
const cors = require("cors");
const config = require("../cofig");
const { json } = require("body-parser");

const {host , port} = config.http;

const app = express();

app.use(cosr());
app.use(json());