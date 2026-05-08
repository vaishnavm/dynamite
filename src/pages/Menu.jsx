import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const menuItems = [
  { id: 1, name: 'Burger Meal', price: 24, desc: 'Delicious beef burger served with golden fries and a refreshing drink.', image: '/images/burger.png' },
  { id: 2, name: 'Burger Meal (Double)', price: 34, desc: 'Double the beef, double the flavor! Served with fries and a drink.', image: '/images/burger.png' },
  { id: 3, name: 'Lunch Meal', price: 36, desc: 'Crispy broasted chicken pieces with a side of coleslaw, fries, and drink.', image: '/images/chicken.png' },
  { id: 4, name: 'Prawns Meal', price: 29, desc: 'Crispy fried prawns cooked to perfection. Includes fries and dipping sauce.', image: '/images/prawns.png' },
  { id: 5, name: 'Shawarma Meal', price: 26, desc: 'Authentic chicken shawarma plate served with garlic paste, pickles, and fries.', image: '/images/wrap.png' },
  { id: 6, name: 'Burger Combo', price: 22, desc: 'Classic burger choices combined perfectly with a side and beverage.', image: '/images/burger.png' },
  { id: 7, name: 'Combo Meal', price: 30, desc: 'A mix of our best items, perfect for satisfying all your cravings.', image: '/images/chicken.png' },
  { id: 8, name: 'Wrap Meal', price: 20, desc: 'Savory chicken wrap toasted to perfection, served with fries and a drink.', image: '/images/wrap.png' },
];

function Menu() {
  const { addToCart, cartItemsCount, cartTotal } = useCart();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, amount) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = current + amount;
      return { ...prev, [id]: Math.max(1, next) };
    });
  };

  const handleAddToCartClick = (item) => {
    const qty = quantities[item.id] || 1;
    addToCart(item, qty);
    // Reset local quantity after adding
    setQuantities((prev) => ({ ...prev, [item.id]: 1 }));
  };

  return (
    <section className="py-5 position-relative" style={{ minHeight: 'calc(100vh - 140px)', backgroundColor: 'var(--bg-dark)' }}>
      <Container className="mt-5 mb-5 pb-5">
        <div className="text-center mb-5">
          <h2 className="display-4 text-light fw-bold">Our <span className="text-yellow">Menu</span></h2>
          <p className="text-muted fs-5">Special Combo Meals & More</p>
        </div>
        <Row className="g-4">
          {menuItems.map((item) => {
            const currentQty = quantities[item.id] || 1;
            return (
              <Col md={6} lg={4} key={item.id}>
                <Card className="h-100 border-0 shadow overflow-hidden" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '15px' }}>
                  <Card.Img variant="top" src={item.image} alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Card.Title className="text-light fw-bold mb-0">{item.name}</Card.Title>
                      <Badge bg="warning" text="dark" className="fs-6 px-3 py-2 rounded-pill">
                        {item.price} AED
                      </Badge>
                    </div>
                    <Card.Text className="text-light mt-2 flex-grow-1" style={{ opacity: 0.9 }}>
                      {item.desc}
                    </Card.Text>
                    
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div className="d-flex align-items-center bg-dark rounded-pill overflow-hidden">
                        <Button 
                          variant="dark" 
                          className="border-0 px-3 py-2 text-yellow fs-5" 
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >-</Button>
                        <span className="text-light fw-bold px-3">{currentQty}</span>
                        <Button 
                          variant="dark" 
                          className="border-0 px-3 py-2 text-yellow fs-5" 
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >+</Button>
                      </div>
                      
                      <Button variant="warning" className="fw-bold px-4 rounded-pill" onClick={() => handleAddToCartClick(item)}>
                        Add
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Floating Cart Summary - Now Links to Cart Page */}
      {cartItemsCount > 0 && (
        <div className="position-fixed bottom-0 start-0 w-100 p-3" style={{ zIndex: 1000 }}>
          <Container>
            <div className="bg-yellow text-dark rounded-pill p-3 shadow-lg d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center ps-3">
                <i className="bi bi-cart-fill fs-4 me-3"></i>
                <div>
                  <h6 className="mb-0 fw-bold">{cartItemsCount} Items in Cart</h6>
                  <p className="mb-0 small fw-bold">Total: {cartTotal} AED</p>
                </div>
              </div>
              <Button as={Link} to="/cart" variant="dark" className="rounded-pill px-4 py-2 fw-bold d-flex align-items-center text-decoration-none">
                View Cart <i className="bi bi-arrow-right fs-5 ms-2"></i>
              </Button>
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}

export default Menu;
