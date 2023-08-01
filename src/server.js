const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("You have arrived");
});

app.listen(3000, function () {
  console.log("Listening on port 3000...");
});
