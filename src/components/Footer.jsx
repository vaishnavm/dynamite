import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="py-4 mt-auto border-top" style={{ backgroundColor: '#050505', borderColor: 'rgba(255, 215, 0, 0.1) !important' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h4 className="text-yellow fw-bold mb-0">Dynam8</h4>
            <p className="text-muted small mt-2 mb-0">
              Blast Your Taste Buds!
            </p>
          </Col>
          
          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="text-light small">
              <p className="mb-1"><strong>Address:</strong> Shop No: 9, Al Bayath Building</p>
              <p className="mb-0 text-muted">Near Mamzar Center, Abu Hail</p>
            </div>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <div className="text-light small">
              <p className="mb-1"><strong>Phone:</strong> 042 62 4499 / 056 55 66881</p>
              <p className="mb-0"><strong>Email:</strong> <span className="text-yellow">dynam8uae@gmail.com</span></p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
