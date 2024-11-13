import axios from "axios";

export default async function AlbumInfo(userInput: string) {
  const response = axios.get(
    `http://localhost:4000/spotify/search/${userInput}`,
  );
  return response;
}
