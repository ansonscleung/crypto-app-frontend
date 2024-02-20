import React, { useEffect, useState } from "react";
import { QuoteProps, QuoteCard } from "./components/quoteCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const API_DOMAIN = process.env.API_DOMAIN || "http://localhost:5000";

function App() {
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

  return (
    <div className="p-4">
      <h1 className="pb-4">Cryptocurrency Realtime Price</h1>
      {data ? (
        <Row xs={1} md={2} lg={3} xl={4} className="g-3">
          {data.map(({ name, price, volume, change }: QuoteProps, idx) => (
            <Col key={idx}>
              <QuoteCard
                name={name}
                price={price}
                volume={volume}
                change={change}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
