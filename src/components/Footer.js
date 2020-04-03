import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBIcon, MDBBtn } from "mdbreact";

function footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0 d-flex justify-content-center" sm={12}>
            <MDBBtn className="linkedin" href="https://www.linkedin.com/in/joe-bailey-04a936196/" target="_blank" size="lg" tag="a" floating social="li">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
            <MDBBtn className="github" href="https://github.com/baileyrva" target="_blank" size="lg" tag="a" floating social="git">
              <MDBIcon fab icon="github" background-color="white" />
            </MDBBtn>
            <MDBBtn className="email" href="https://github.com/baileyrva" target="_blank" size="lg" tag="a" floating social="email">
              <MDBIcon icon="envelope" />
            </MDBBtn>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default footer;
