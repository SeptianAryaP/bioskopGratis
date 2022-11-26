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
                <Card.Text>
                  Dune kali ini menceritakan tentang perjalanan Duke Atreides
                  (Oscar Isaac) menjelajahi gurun bernama Dune untuk mendapat
                  sumber spice
                </Card.Text>
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
                <Card.Title>E E A T</Card.Title>
                <Card.Text>
                  Dalam satu hari, Evelyn dihadapkan oleh masalah yang
                  bertubi-tubi. Ayahnya, Gong Gong (James Hong), baru saja tiba
                  dari China untuk menghadiri perayaan festival. Kemudian,
                  Waymond berusaha untuk memberikan Evelyn surat gugatan cerai.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={infiniteImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Infinite Storm</Card.Title>
                <Card.Text>
                  mengisahkan seorang pendaki bernama Pam Bales. Ketika dia
                  mendaki, tiba-tiba terjadi badai salju yang hebat. Di tengah
                  badai, Pam bertemu dengan John, seorang pria yang bertingkah
                  aneh.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={jokerImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Joker</Card.Title>
                <Card.Text>
                  Perjalanan sosok komedian gagal, Arthur Fleck pria yang
                  diabaikan oleh masyarakat dan berubah menjadi penjahat yang
                  sangat keji. Arthur tumbuh dari masyarakat kalangan bawah yang
                  terus gagal untuk meraih kesuksesan dalam profesinya sebagai
                  komedian stand up.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={lightyearImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Light Year</Card.Title>
                <Card.Text>
                  mengisahkan tentang perjalanan ke luar angkasa yang dilakukan
                  Kapten Unit Perlindungan Alam Semesta dari korps Space Ranger
                  Aliansi Intergalaksi, Buzz Lightyear. Dalam perjalanan menuju
                  planet asing, Buzz menerima misi berbahaya untuk
                  mengeksplorasi planet baru.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-dark text-center movieImage">
              <Image src={morbiusImage} alt="Dune Movies" className="image" />
              <Card.Body className="text-bg-dark">
                <Card.Title>Morbius</Card.Title>
                <Card.Text>
                  mengisahkan awal perjalanan Dr. Michael Morbius, seorang
                  dokter dan ilmuwan genius yang kehidupannya berubah drastis
                  setelah menjadi vampir.Sejak
                  kecil mengidap penyakit darah langka yang mengakibatkan
                  dirinya lumpuh dan harus mendapat transfusi darah setiap hari
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
