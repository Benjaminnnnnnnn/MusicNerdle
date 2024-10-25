import React, { useEffect, useState } from "react";

interface ApiResponse {
  message: string;
}
const Landing = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetch("/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return <div> {data ? data.message : "Loading..."} </div>;
};

export default Landing;
