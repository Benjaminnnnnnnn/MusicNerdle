import { Injectable } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import axios from 'axios';
configDotenv();

@Injectable()
export class SpotifyService {
  async getAccessToken(): Promise<string> {
    const url = 'https://accounts.spotify.com/api/token';
    const auth = Buffer.from(
      process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_SECRET,
    );
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + auth.toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
      });
      const accessToken = await response.json();
      if (accessToken) {
        console.log(accessToken);
        return accessToken.access_token;
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Fetch Error: ', error);
    }
  }
  async getAlbums(albums: string, accessToken: string) {
    const url = `https://api.spotify.com/v1/albums/${albums}`;
    console.log(accessToken);
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  }
  async searchAlbum(album: string, accessToken: string) {
    const searchUrl = 'https://api.spotify.com/v1/search';
    const response = await axios.get(searchUrl, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
      params: {
        q: album,
        type: 'album',
        limit: 1,
      },
    });
    return response.data.albums.items[0];
  }
}
