const express = require("express");
const path = require("path");

const app = express();
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8002, console.log("Server Running On Port 8002"));
