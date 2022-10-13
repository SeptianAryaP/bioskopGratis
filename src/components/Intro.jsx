import { Container, Col, Row, Button } from "react-bootstrap";
import React from "react";

export default function Intro() {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-lg-center text-center ">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">GA PAKE KARCIS</div>
            <div className="introButton mt-4 text-center">
              <Button className="btn btn-dark" href="/">
                Lihat Semua List
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
