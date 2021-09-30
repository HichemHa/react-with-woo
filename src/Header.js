import React, { useState } from "react";
import {
  Navbar,
  Modal,
  Form,
  Container,
  Nav,
  NavDropdown,
  FormControl,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';





function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const cards = useSelector((state) => state.cardReducer.card) || [];
  console.log(cards);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <>
            <Button variant="primary" onClick={handleShow} style={{marginRight:"20px"}}>
              Panier  <FaShoppingCart/>
            </Button>

            <Modal show={show} onHide={handleClose} animation={false} >
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {cards.length == 0 ? (
                  <p>pas de produit dans le panier</p>
                ) : (
                  cards.map((el) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>name : {el.name}</p>
                      <p>price : {el.price}</p>
                      <p>quantit : {el.quantit}</p>
                    </div>
                  ))
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Link to={"/confirme"} onClick={handleClose}>
                  {" "}
                  <Button variant="primary" onClick={handleClose}>
                    Confime la cmd
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Link to={"/commanede"}>
              <Button variant="outline-success">Search</Button>{" "}
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
