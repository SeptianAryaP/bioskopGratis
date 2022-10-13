import { Card, Container, Col, Row, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";


export default function Superhero() {
  return (
    <div>
      <br />
      <br />
      <Container>
        <h1 className="text-white d-flex justify-content-center" id="superhero">SUPERHERO MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Dune</Card.Title>
                <Card.Text>Dune</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={avengerImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Dune</Card.Title>
                <Card.Text>Dune</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={batmanImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Dune</Card.Title>
                <Card.Text>Dune</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={robinImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Dune</Card.Title>
                <Card.Text>Dune</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={spidermanImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Dune</Card.Title>
                <Card.Text>Dune</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Dune</Card.Title>
                <Card.Text>Dune</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
