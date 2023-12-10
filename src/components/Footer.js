import { Container, Row, Col } from "react-bootstrap";
import logo from '../img/logo.png';
import navIcon1 from '../img/nav-icon-linkedin.svg';
import navIcon2 from '../img/github-white-cat.png';
import navIcon3 from '../img/email-icon.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="logo">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="footer-social-icon">
              <a href="https://www.linkedin.com/in/lauren-chow-91439b266/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LN" />
              </a>
              <a className="github-mark" href="https://github.com/lauren2chow" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a className="email" href="mailto:lauren2chow@gmail.com">
                <img src={navIcon3} alt="Email" />
              </a>
            </div>
            <p>Copyright 2023 Lauren Chow</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}