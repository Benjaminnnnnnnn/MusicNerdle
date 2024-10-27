require("dotenv").config();
const client_id = process.env.SPOTIFY_CLIENT_ID;
const secret = process.env.SPOTIFY_SECRET;

async function getAccessToken() {
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
    if (response.statusText == "OK") {
      return response["set-cookie"];
    } else {
      console.error("Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Fetch Error: ", error);
  }
}

module.exports = {
  getAccessToken,
};
