import express from "express";
const app = express();
const PORT = process.env.PORT || 3080;
const { SpotifyHander } = require("./spotify/index.js");
const spotify = new SpotifyHander();
spotify.initialize();

app.get("/", (req, res) => {
  res.send(spotify.token);
});

app.get("/profile", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
