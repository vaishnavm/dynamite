import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Badge } from 'react-bootstrap';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import { CartProvider, useCart } from './context/CartContext';
import './index.css';

function ScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const observeNodes = () => {
      document.querySelectorAll('.card, section h2, .glass-panel').forEach((el) => {
        if (!el.classList.contains('scroll-animate')) {
          el.classList.add('scroll-animate');
          observer.observe(el);
        }
      });
    };

    observeNodes();
    const mo = new MutationObserver(observeNodes);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

function Navigation() {
  const { cartItemsCount } = useCart();

  return (
    <Navbar expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-yellow fw-bold">
          Dynam8
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <Link to="/cart" className="text-yellow d-lg-none position-relative me-3 text-decoration-none">
            <i className="bi bi-cart-fill fs-3"></i>
            {cartItemsCount > 0 && (
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                {cartItemsCount}
              </Badge>
            )}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/" className="text-light px-3">Home</Nav.Link>
            {/* <Nav.Link as={Link} to="/menu" className="text-light px-3">Menu</Nav.Link> */}
            <Nav.Link as={Link} to="/products" className="text-light px-3">Products</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light px-3">Contact</Nav.Link>

            <Link to="/cart" className="text-yellow position-relative d-none d-lg-block mx-3 text-decoration-none" title="View Cart">
              <i className="bi bi-cart-fill fs-4"></i>
              {cartItemsCount > 0 && (
                <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.65rem' }}>
                  {cartItemsCount}
                </Badge>
              )}
            </Link>

            <Button as={Link} to="/products" variant="yellow" className="ms-lg-3 btn-yellow mt-3 mt-lg-0 text-decoration-none">
              Order Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <ScrollAnimation />
          <Navigation />

          <main style={{ paddingTop: '86px', flex: '1' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/menu" element={<Menu />} /> */}
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>


          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
