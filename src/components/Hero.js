import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col sm={5.5}>
            {props.title && <h2 className="display-4 font-italic">{props.title}</h2>}
            {props.subTitle  && <h3>{props.subTitle}</h3>}
            {props.text && <h3>{props.text}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
