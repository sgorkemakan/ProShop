import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="d-flex flex-row py-1">
            <p>
              ProShop &copy; {currentYear} & Icon by
              <a
                style={{ textDecoration: "none", color: "grey" }}
                href="https://www.flaticon.com/authors/ayub-irawan"
              >
                &nbsp;Ayub Irawan
              </a>
            </p>
          </Col>
          <Col className="d-flex flex-row-reverse py-1">
            <p>
              <a
                style={{ textDecoration: "none", color: "grey" }}
                href="mailto:s.gorkemakan@gmail.com"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                Mail Me
              </a>

              <a
                style={{ textDecoration: "none", color: "grey" }}
                href="https://www.facebook.com/SahinGorkemAkan"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                My Facebook
              </a>

              <a
                style={{ textDecoration: "none", color: "grey" }}
                href="https://github.com/sgorkemakan?tab=repositories"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                My GitHub
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
