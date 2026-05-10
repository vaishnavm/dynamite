import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <section className="py-5" style={{ minHeight: 'calc(100vh - 140px)', backgroundColor: 'var(--bg-dark)' }}>
      <Container className="mt-5">
        <div className="text-center mb-5">
          <h2 className="display-4 text-light fw-bold">Contact <span className="text-yellow">Us</span></h2>
          <p className="text-muted fs-5">We'd love to hear from you!</p>
        </div>
        
        <Row className="g-5 justify-content-center">
          <Col lg={5}>
            <div className="p-4 rounded-4 shadow h-100" style={{ backgroundColor: 'var(--bg-card)' }}>
              <h3 className="text-yellow mb-4">Get in Touch</h3>
              
              <div className="d-flex align-items-start mb-4">
                <div className="bg-yellow text-dark rounded-circle p-3 me-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                  <i className="bi bi-geo-alt-fill fs-5"></i>
                </div>
                <div>
                  <h5 className="text-light mb-1">Our Location</h5>
                  <p className="text-muted mb-0">Shop No: 9, Al Bayath Building<br/>Near Mamzar Center, Abu Hail</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <div className="bg-yellow text-dark rounded-circle p-3 me-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                  <i className="bi bi-telephone-fill fs-5"></i>
                </div>
                <div>
                  <h5 className="text-light mb-1">Phone Numbers</h5>
                  <p className="text-muted mb-0">042 62 4499<br/>056 55 66881</p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="bg-yellow text-dark rounded-circle p-3 me-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px' }}>
                  <i className="bi bi-envelope-fill fs-5"></i>
                </div>
                <div>
                  <h5 className="text-light mb-1">Email Address</h5>
                  <p className="text-muted mb-0">conatct@dynamite.com</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="p-4 rounded-4 shadow" style={{ backgroundColor: 'var(--bg-card)' }}>
              <h3 className="text-light mb-4">Send us a Message</h3>
              <Form>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-light">Name</Form.Label>
                      <Form.Control type="text" placeholder="Your Name" className="bg-dark text-light border-secondary" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="text-light">Email</Form.Label>
                      <Form.Control type="email" placeholder="Your Email" className="bg-dark text-light border-secondary" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label className="text-light">Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" className="bg-dark text-light border-secondary" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="text-light">Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" className="bg-dark text-light border-secondary" />
                </Form.Group>
                <Button variant="warning" className="w-100 fw-bold py-2" style={{ borderRadius: '10px' }}>
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
