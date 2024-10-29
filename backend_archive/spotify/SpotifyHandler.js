require("dotenv").config();
const client_id = process.env.SPOTIFY_CLIENT_ID;
const secret = process.env.SPOTIFY_SECRET;

class SpotifyHandler {
  constructor() {
    this.token;
  }

  async getAccessToken() {
    const url = "https://accounts.spotify.com/api/token";
    const auth = new Buffer.from(client_id + ":" + secret).toString("base64");
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: "Basic " + auth,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      });
      const accessToken = await response.json();
      console.log(accessToken);
      if (accessToken) {
        this.token = accessToken.access_token;
        return;
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Fetch Error: ", error);
    }
  }

  async initialize() {
    this.getAccessToken();
    return;
  }
}

module.export = {
  SpotifyHandler,
};
