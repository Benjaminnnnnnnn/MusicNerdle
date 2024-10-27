const express = require("express");
const app = express();
const PORT = process.env.PORT || 3080;
const { getAccessToken } = require("./spotify/getAccessToken.js");

app.get("/", (req, res) => {
  res.send(getAccessToken());
});

app.get("/profile", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
