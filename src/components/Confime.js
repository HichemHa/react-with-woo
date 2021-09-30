import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

function Confime() {
  const cards = useSelector((state) => state.cardReducer.card) || [];

  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Name" />
              </Col>
              <Col>
                <Form.Control placeholder="last Name" />
              </Col>
            </Row>

            <Row>
              <Col>
                {" "}
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>phone</Form.Label>
                  <Form.Control type="tel" placeholder="Enter phone" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>
            </Row>
            <Row>
              <Col xs={7}>
                <Form.Control placeholder="City" />
              </Col>
              <Col>
                <Form.Control placeholder="State" />
              </Col>
              <Col>
                <Form.Control placeholder="Zip" />
              </Col>
            </Row>
          </Form>
        </Col>
        <Col>
          {cards.length === 0 ? (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          ) : (
              cards.map((el)=><Card>
              <Card.Body
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                <span style={{width:"70px"}}>Quantité :</span><Card.Header style={{width:"40px"}}>{el.quantit}</Card.Header> <sapn  style={{width:"120px"}}>{el.name} </sapn> <Card.Header>{el.price} euro</Card.Header>
              </Card.Body>
            </Card>)
            
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Confime;
