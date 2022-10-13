import { Card, Container, Col, Row, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

export default function Trending() {
  return (
    <div>
      <br />
      <br />
      <Container>
        <h1 className="text-white d-flex justify-content-center" id="trending">
          TRENDING MOVIES
        </h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={duneImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Dune</Card.Title>
                <Card.Text>Dune</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image
                src={everythingImage}
                alt="Dune Movies"
                className="image"
              />
              <Card.Body className="text-bg-dark">
                <Card.Title>Dune</Card.Title>
                <Card.Text>Dune</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={infiniteImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Dune</Card.Title>
                <Card.Text>Dune</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={jokerImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Dune</Card.Title>
                <Card.Text>Dune</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={lightyearImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Dune</Card.Title>
                <Card.Text>Dune</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={morbiusImage} alt="Dune Movies" className="image" />
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
