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
        <h1 className="text-white d-flex justify-content-center" id="superhero">
          SUPERHERO MOVIES
        </h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Ant Man</Card.Title>
                <Card.Text>
                  Film bergenre petualang dan laga ini mengisahkan pahlawan
                  Avenger yang punya kemampuan untuk memeperkecil ukuran badan
                  dan benda di sekitarnya.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={avengerImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Avengers End Game</Card.Title>
                <Card.Text>
                  End Game dapat mengacu ke akhir saga dan lebih lanjut tentang
                  akhir dari Avengers itu sendiri. End Game pun bisa menjadi
                  petunjuk bahwa Avengers yang tersisa tidak akan muncul lagi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={batmanImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>The Dark Knight</Card.Title>
                <Card.Text>
                  Sebuah bank di Gotham City dirampok oleh sekelompok kriminal.
                  Joker memanipulasi dengan menyuruh mereka saling membunuh satu
                  sama lain agar mendapatkan bagian yang lebih besar.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={robinImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Robin Hood</Card.Title>
                <Card.Text>
                  Robin menyaksikan rakyat-rakyat biasa berencana untuk bangkit
                  melawan pemerintah yang menindas dan mengeksploitasi mereka.
                  Mengetahui hal tersebut, Robin pun mengambil langkah yang sama
                  dengan mereka.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={spidermanImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Spiderman No Way Home</Card.Title>
                <Card.Text>
                  film ini menceritakan kehidupan Peter Parker setelah dunia
                  mengetahui identitasnya sebagai Spider-Man. Hal tersebut tidak
                  hanya berdampak pada dirinya, melainkan juga pada orang-orang
                  terdekatnya.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Man Of Steel</Card.Title>
                <Card.Text>
                  diceritakan mengenai kedatangan Superman di Bumi. Sosok dari
                  Planet Krypton tersebut menjadi perkasa dan kekuatannya
                  digunakan untuk melindungi kehidupan Bumi akibat terjadi
                  serangan dari Jenderal Zod.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
