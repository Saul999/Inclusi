import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Cards() {
  const cardData = [
    { title: "Civic Engagement Tools", path: "/civic-tools" },
    { title: "Language Translator", path: "/translator" },
    { title: "Resources", path: "/resources" },
    { title: "Contact Us", path: "/contact" },
  ];

  return (
    <Container className="my-4">
      <Row>
        {cardData.map((card, index) => (
          <Col md={6} className="mb-4" key={index}>
            <Link
              to={card.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                className="h-100"
                style={{ cursor: "pointer", transition: "transform 0.2s" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="/lang_trans_icon.png"
                    style={{
                      width: "100px",
                      height: "auto",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Text>{card.title}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
