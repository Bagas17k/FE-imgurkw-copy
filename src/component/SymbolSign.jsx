import React from "react";
import { Container, Card, CardDeck, Row } from "react-bootstrap";

const SymbolSign = (props) => {
  return (
    <div>
      <Row>
        <Container className="d-flex justify-content-center">
          <Card className="logo-signin">
            <Card.Body>
              <CardDeck>
                <Card className="fb card-img mx-1" style={{ width: "5rem" }}>
                  <i class="fab fa-facebook-f d-flex justify-content-center"></i>
                </Card>
                <Card
                  className="twitter card-img mx-1"
                  style={{ width: "5rem" }}
                >
                  <i class="fab fa-twitter d-flex justify-content-center"></i>
                </Card>
                <Card
                  className="google card-img mx-1"
                  style={{ width: "5rem" }}
                >
                  <i class="fab fa-google d-flex justify-content-center"></i>
                </Card>
                <Card className="yahoo card-img mx-1" style={{ width: "5rem" }}>
                  <i class="fab fa-yahoo d-flex justify-content-center">
                    <i class="fas fa-exclamation"></i>
                  </i>
                </Card>
              </CardDeck>
            </Card.Body>
          </Card>
        </Container>
      </Row>
    </div>
  );
};

export default SymbolSign;
