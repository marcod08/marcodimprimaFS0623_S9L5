import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark">
            <div>
                <Row>
                    <Col>
                        <Button variant='dark'><i className="bi bi-facebook text-white"></i></Button>
                        <Button variant='dark'><i className="bi bi-instagram text-white"></i></Button>
                        <Button variant='dark'><i className="bi bi-twitter text-white"></i></Button>
                        <Button variant='dark'><i className="bi bi-youtube text-white"></i></Button>
                    </Col>
                </Row>
                <Row className="my-2">
                    <Col className="text-left">
                        <div className="footer-links">
                            <p><a href="#" alt="footer link" className="text-white">Audio and Subtitles</a></p>
                            <p><a href="#" alt="footer link" className="text-white">Media Center</a></p>
                            <p><a href="#" alt="footer link" className="text-white">Privacy</a></p>
                            <p><a href="#" alt="footer link" className="text-white">Contact us</a></p>
                        </div>
                    </Col>
                    <Col className="text-left">
                        <div className="footer-links">
                            <p><a href="#" alt="footer link" className="text-white">Audio Description</a></p>
                            <p><a href="#" alt="footer link" className="text-white">Investor Relations</a></p>
                            <p><a href="#" alt="footer link" className="text-white" >Legal Notices</a></p>
                        </div>
                    </Col>
                    <Col className="text-left">
                        <div className="footer-links">
                            <p><a href="#" alt="footer link" className="text-white">Help Center</a></p>
                            <p><a href="#" alt="footer link" className="text-white">Jobs</a></p>
                            <p><a href="#" alt="footer link" className="text-white">Cookie Preferences</a></p>
                        </div>
                    </Col>
                    <Col className="text-left">
                        <div className="footer-links">
                            <p><a href="#" alt="footer link" className="text-white">Gift Cards</a></p>
                            <p><a href="#" alt="footer link" className="text-white">Terms of Use</a></p>
                            <p><a href="#" alt="footer link" className="text-white">Corporate Information</a></p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-left">
                        <Button variant="dark" size="sm" className="footer-button rounded-0 mt-3 text-white border border-secondary">
                            Service Code
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-left mb-2 mt-2 copyright text-white">
                        &copy; 1997-2023 Netflix, Inc.
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer;