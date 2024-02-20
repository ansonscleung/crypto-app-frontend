import React, { FunctionComponent } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export type QuoteProps = {
  name: string;
  price: string;
  volume: number;
  change: number;
};

const changeStyle = (change: number) => {
  if (change > 0) {
    return "text-success";
  } else if (change < 0) {
    return "text-danger";
  } else return "text-secondary";
};

export const QuoteCard: FunctionComponent<QuoteProps> = ({
  name,
  price,
  volume,
  change,
}: QuoteProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-warning">${price}</Card.Text>
        <Row>
          <Col>
            <p className="mb-1 text-muted">Volume: </p>
            <p className="mb-0 text-secondary">{volume.toString()}</p>
          </Col>
          <Col>
            <p className="mb-1 text-muted">Change: </p>
            <p className={`mb-0 ${changeStyle(change)}`}>{change.toString()}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default QuoteCard;
