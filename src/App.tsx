import React, { useEffect, useState } from "react";
const COINMARKETCAP_API_DOMAIN =
  process.env.COINMARKETCAP_API_DOMAIN ||
  "https://sandbox-api.coinmarketcap.com";
const COINMARKETCAP_API_KEY =
  process.env.COINMARKETCAP_API_KEY || "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `${COINMARKETCAP_API_DOMAIN}/v2/cryptocurrency/quotes/latest?symbol=BTC&convert=USD`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers":
            "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
          "Content-Type": "application/json",
          "X-CMC_PRO_API_KEY": COINMARKETCAP_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Data from API:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
