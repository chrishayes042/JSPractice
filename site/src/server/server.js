const express = require("express", 4.18);
const app = express();
const path = require("path");
const router = express.Router();
const port = 3000;

app.get("/", (req, res) => {
  zzz;
  res.sendFile(path.join("../index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
