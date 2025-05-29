require("dotenv").config();
const express = require("express");
const cors = require("cors");

const burgers = require("./routes/burgers");
const ingredientes = require("./routes/ingredientes");
const status = require("./routes/status");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/ingredientes", ingredientes);
app.use("/api/status", status);
app.use("/api/burgers", burgers);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
