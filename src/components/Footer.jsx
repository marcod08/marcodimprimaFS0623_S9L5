import React from "react";
import { Row, Col, Button, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FooterLink = ({ href, text }) => (
  <p>
    <a href={href} alt="footer link" className="text-white">
      {text}
    </a>
  </p>
);

function Footer() {
  return (
    <footer className="bg-dark">
      <Container>
        <Row>
          <Col md={4}>
            <Button variant='dark'><i className="bi bi-facebook text-white"></i></Button>
            <Button variant='dark'><i className="bi bi-instagram text-white"></i></Button>
            <Button variant='dark'><i className="bi bi-twitter text-white"></i></Button>
            <Button variant='dark'><i className="bi bi-youtube text-white"></i></Button>
          </Col>
        </Row>
        <Row className="my-2">
          <Col md={4} className="text-left">
            <div className="footer-links">
              <FooterLink href="#" text="Audio and Subtitles" />
              <FooterLink href="#" text="Media Center" />
              <FooterLink href="#" text="Privacy" />
              <FooterLink href="#" text="Contact us" />
            </div>
          </Col>
          <Col md={4} className="text-left">
            <div className="footer-links">
              <FooterLink href="#" text="Audio Description" />
              <FooterLink href="#" text="Investor Relations" />
              <FooterLink href="#" text="Legal Notices" />
            </div>
          </Col>
          <Col md={4} className="text-left">
            <div className="footer-links">
              <FooterLink href="#" text="Help Center" />
              <FooterLink href="#" text="Jobs" />
              <FooterLink href="#" text="Cookie Preferences" />
            </div>
          </Col>
          <Col md={4} className="text-left">
            <div className="footer-links">
              <FooterLink href="#" text="Gift Cards" />
              <FooterLink href="#" text="Terms of Use" />
              <FooterLink href="#" text="Corporate Information" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="text-left">
            <Button variant="dark" size="sm" className="footer-button rounded-0 my-2 text-white border border-secondary">
              Service Code
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="text-left my-2 copyright text-white">
            &copy; 1997-2023 Netflix, Inc.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;