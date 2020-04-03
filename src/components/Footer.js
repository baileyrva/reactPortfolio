import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SocialIcon } from "react-social-icons";

function footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0 d-flex justify-content-center" sm={12}>
            <SocialIcon url="https://www.linkedin.com/in/baileyrva/" target="_blank" style={{ height: 75, width: 75 }} />
            <SocialIcon url="https://github.com/baileyrva" target="_blank" style={{ height: 75, width: 75 }} />
            <SocialIcon url="mailto:baileyrva@gmail.com" target="_blank" style={{ height: 75, width: 75 }} />

          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default footer;
