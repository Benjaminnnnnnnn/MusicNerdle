import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/") // Use '/' to hit the root of the Node.js server
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.text();
      })
      .then((data) => setMessage(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
