import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    let message = "Hello Dynam8, I would like to order:\n\n";
    
    cart.forEach((item) => {
      message += `${item.quantity}x ${item.name} - ${item.quantity * item.price} AED\n`;
    });
    
    message += `\n*Total: ${cartTotal} AED*`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/971506283455?text=${encodedMessage}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <section className="py-5 d-flex align-items-center" style={{ minHeight: 'calc(100vh - 140px)', backgroundColor: 'var(--bg-dark)' }}>
        <Container className="text-center mt-5">
          <i className="bi bi-cart-x text-muted mb-4" style={{ fontSize: '5rem' }}></i>
          <h2 className="text-light fw-bold">Your Cart is Empty</h2>
          <p className="text-muted fs-5 mb-4">Looks like you haven't added anything to your cart yet.</p>
          <Button as={Link} to="/menu" variant="yellow" className="px-5 py-3 rounded-pill fw-bold text-dark text-decoration-none">
            Browse Menu
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-5 position-relative" style={{ minHeight: 'calc(100vh - 140px)', backgroundColor: 'var(--bg-dark)' }}>
      <Container className="mt-5 mb-5 pb-5">
        <h2 className="display-5 text-light fw-bold mb-5">Your <span className="text-yellow">Cart</span></h2>
        
        <Row className="g-5">
          <Col lg={8}>
            {cart.map((item) => (
              <Card key={item.id} className="mb-4 border-0 shadow" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '15px' }}>
                <Card.Body className="p-4">
                  <Row className="align-items-center">
                    <Col xs={4} md={3} className="text-center">
                      <img src={item.image} alt={item.name} className="img-fluid rounded-3" style={{ maxHeight: '100px', objectFit: 'cover' }} />
                    </Col>
                    <Col xs={8} md={4}>
                      <h5 className="text-light fw-bold mb-1">{item.name}</h5>
                      <p className="text-yellow fw-bold mb-0">{item.price} AED</p>
                    </Col>
                    <Col xs={12} md={5} className="mt-4 mt-md-0 d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center bg-dark rounded-pill overflow-hidden">
                        <Button 
                          variant="dark" 
                          className="border-0 px-3 py-2 text-yellow fs-5" 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >-</Button>
                        <span className="text-light fw-bold px-3">{item.quantity}</span>
                        <Button 
                          variant="dark" 
                          className="border-0 px-3 py-2 text-yellow fs-5" 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >+</Button>
                      </div>
                      
                      <Button variant="outline-danger" className="border-0" onClick={() => removeFromCart(item.id)}>
                        <i className="bi bi-trash fs-5"></i>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>

          <Col lg={4}>
            <div className="p-4 rounded-4 shadow sticky-top" style={{ backgroundColor: 'var(--bg-card)', top: '100px' }}>
              <h4 className="text-light fw-bold mb-4">Order Summary</h4>
              
              <div className="d-flex justify-content-between mb-3 text-muted">
                <span>Subtotal</span>
                <span>{cartTotal} AED</span>
              </div>
              <div className="d-flex justify-content-between mb-4 text-muted border-bottom border-secondary pb-4">
                <span>Delivery</span>
                <span>Calculated on WhatsApp</span>
              </div>
              
              <div className="d-flex justify-content-between mb-4 text-light fw-bold fs-4">
                <span>Total</span>
                <span className="text-yellow">{cartTotal} AED</span>
              </div>

              <Button variant="warning" className="w-100 fw-bold py-3 rounded-pill d-flex align-items-center justify-content-center" onClick={handleCheckout}>
                <i className="bi bi-whatsapp fs-4 me-2 text-success"></i> Checkout on WhatsApp
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cart;
