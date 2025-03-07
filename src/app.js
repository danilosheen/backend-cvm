const express = require("express");
const cors = require("cors");
const pdfRoutes = require("./routes/routes");

const app = express();
app.use(cors({
  origin: ['https://cvm-docs.vercel.app', 'http://localhost:4200']
}));
app.use(express.json());

app.use("/api/pdf", pdfRoutes);

module.exports = app;
