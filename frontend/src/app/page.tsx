"use client";

import { useState } from "react";
import axios from "axios";
import AlbumInfo from "./Albums/AlbumInfo";

export default function Home() {
  const [albumName, setAlbumName] = useState("");
  const [albumInfo, setAlbumInfo] = useState(null);

  const handleSearch = async () => {
    const data = await AlbumInfo(albumName);
    setAlbumInfo(data.data);
  };
  return (
    <div>
      <h1>Search for an Album</h1>
      <div>
        <label htmlFor="albumName">Enter album name: </label>
        <input
          id="albumName"
          type="text"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)} // Update album name as the user types
        />
      </div>
      <button onClick={handleSearch}>{"Search"}</button>
      {albumInfo && (
        <div>
          <h2>{albumInfo.name}</h2>
          <img
            src={albumInfo.images[0].url}
            alt={albumInfo.id}
            style={{ width: "640px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}
