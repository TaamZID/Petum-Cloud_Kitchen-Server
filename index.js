const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const datas = require("./data/datas.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/courses", (req, res) => {
  res.send(datas);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = datas.find((c) => c.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
