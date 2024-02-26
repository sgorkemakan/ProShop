import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
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
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
