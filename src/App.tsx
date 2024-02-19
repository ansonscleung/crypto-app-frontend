import React, { useEffect, useState } from "react";
const API_DOMAIN = process.env.API_DOMAIN || "http://localhost:5000";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_DOMAIN}/api/quotes`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>Bitcoin</p>
          <p>${data["BTC"]["price"]}</p>
          <p>Volume: {data["BTC"]["volume"]}</p>
          <p>Change: {data["BTC"]["change"]}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
