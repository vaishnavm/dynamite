import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import homeVideo from '../assets/home.mp4';
import Menu from '../pages/Menu'
import Contact from '../pages/Contact'


function Home() {
  return (
    <>
      <section className="hero-section" style={{ minHeight: 'calc(100vh - 140px)' }}>
        <div className="hero-glow"></div>
        <Container>
          <Row className="align-items-center mt-5 mt-lg-0">
            <Col lg={6} className="mb-5 mb-lg-0 position-relative" style={{ zIndex: 10 }}>
              <h1 className="hero-title text-light">
                Crave the <span className="text-yellow">Flavor</span>. <br />
                Taste the <span className="text-yellow">Magic</span>.
              </h1>
              <p className="hero-subtitle">
                Blast your taste buds with delicious and yummy broasted chicken, shrimp, burger, pastas etc.
              </p>
              <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">
                <Button as={Link} className="btn-yellow btn-lg" to="/products">Explore Menu</Button>
                <Button as={Link} variant="outline-light" className="btn-lg border-2" to="/contact" style={{ borderRadius: '30px', padding: '10px 30px' }}>Book a Table</Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="canvas-container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                <video
                  src={homeVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', maxWidth: '600px', borderRadius: '20px', objectFit: 'cover' }}
                />
              </div>
            </Col>
          </Row>
        </Container>

      </section>
      {/* <Menu /> */}
      <Contact />
    </>
  );
}

export default Home;
