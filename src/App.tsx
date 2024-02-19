import React, { useEffect, useState } from "react";
const API_DOMAIN = process.env.API_DOMAIN || "http://localhost:5000";

function App() {
  type QuoteProps = {
    name: String;
    price: String;
    volume: Number;
    change: Number;
  };

  const [data, setData] = useState<Array<QuoteProps> | null>(null);

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

  const Quote = ({ name, price, volume, change }: QuoteProps) => {
    return (
      <div>
        <p>{name}</p>
        <p>${price}</p>
        <p>Volume: {volume.toString()}</p>
        <p>Change: {change.toString()}</p>
      </div>
    );
  };

  return (
    <div>
      {data ? (
        data.map(({ name, price, volume, change }: QuoteProps) => (
          <Quote name={name} price={price} volume={volume} change={change} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
