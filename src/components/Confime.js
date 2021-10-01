import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import { deleteFromCard, placeOrder } from "../redux/actions";
import { useHistory } from "react-router-dom";

function Confime() {
  const cards = useSelector((state) => state.cardReducer.card) || [];
  const response = useSelector((state) => state.cardReducer.response) || [];
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addresstwo, setAddresstwo] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zip, setZip] = useState("");
  let productss = [];
  cards.map((el) => {
    productss.push({ product_id: el.id, quantity: el.quantit });
  });

  const data2 = {
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: true,
    billing: {
      first_name: name,
      last_name: lastname,
      address_1: addressOne,
      address_2: addresstwo,
      city: city,
      state: region,
      postcode: zip,
      country: "FR",
      email: email,
      phone: phone,
    },
    shipping: {
      first_name: name,
      last_name: lastname,
      address_1: addressOne,
      address_2: addresstwo,
      city: city,
      state: region,
      postcode: zip,
      country: "FR",
    },
    line_items: productss,
    shipping_lines: [],
  };
  const history = useHistory();
  const ifNoProd = () => {
    alert("merci de choisir un produit au moins");
    history.push("/");
  };

const reducer = (previousValue, currentValue) => previousValue + currentValue;
let sommQnt = 0;
if(cards.length > 0 ){
  sommQnt = cards.map(el=>el.quantit).reduce(reducer)
}
let sommeTots = 0;
if(cards.length > 0){
  let sommeTot = cards.map((el)=>el.quantit*Number(el.price));
  sommeTots = sommeTot.reduce(reducer)
}
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>confirmation commande</h1>
        <Row>
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  {" "}
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formGridphone">
                    <Form.Label>phone</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    onChange={(e) => setAddressOne(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    placeholder="Apartment, studio, or floor"
                    onChange={(e) => setAddresstwo(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Col xs={7}>
                  <Form.Control
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="State"
                    onChange={(e) => setRegion(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Zip"
                    onChange={(e) => setZip(e.target.value)}
                  />
                </Col>
              </Row>
              <Button
                onClick={() =>
                  cards.length == 0 ? ifNoProd() : dispatch(placeOrder(data2))
                }
              >
                SEND
              </Button>
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
              cards.map((el) => (
                <Card style={{ display: "flex", flexDirection: "row" }}>
                  <Card.Body
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {" "}
                    <span style={{ width: "70px" }}>Quantité :</span>
                    <Card.Header style={{ width: "40px" }}>
                      {el.quantit}
                    </Card.Header>{" "}
                    <sapn style={{ width: "120px" }}>{el.name} </sapn>{" "}
                    <Card.Header>{el.price} euro</Card.Header>
                  </Card.Body>
                  <Button
                    onClick={() => dispatch(deleteFromCard(el.id))}
                    style={{ margin: "16px" }}
                  >
                    Delete
                  </Button>
                </Card>
              ))

            )}
            {cards.length === 0 ? "" :  <Card style={{ display: "flex", flexDirection: "row" }}>
                  <Card.Body
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {" "}
                    <span style={{ width: "70px" }}>Quantité total:</span>
                    <Card.Header style={{ width: "40px" }}>
                    {sommQnt}
                    </Card.Header>{" "}
                    <sapn style={{ width: "120px" }}>total des prix </sapn>{" "}
                    <Card.Header>{sommeTots}</Card.Header>
                  </Card.Body>
                  
                </Card>}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {response == 0 ? (
            ""
          ) : (
            <>
              <h2>Votre commande est bé passé</h2>
              <Col>
                {" "}
                <div>Identifiant de la commande : {response.id}</div>
                <div>Etat de la commande : {response.status}</div>{" "}
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Confime;
