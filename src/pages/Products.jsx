import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const allProducts = [
  { id: 101, name: 'Classic Beef Burger', category: 'Burgers', price: 20, desc: 'Juicy beef patty with fresh lettuce, tomato, and our signature sauce.', image: '/images/burger.png' },
  { id: 102, name: 'Double Cheese Burger', category: 'Burgers', price: 28, desc: 'Two beef patties layered with melted cheddar cheese.', image: '/images/burger.png' },
  { id: 103, name: 'Crispy Chicken Wrap', category: 'Wraps', price: 18, desc: 'Crispy chicken strips wrapped with fresh veggies and garlic mayo.', image: '/images/wrap.png' },
  { id: 104, name: 'Spicy Shawarma Wrap', category: 'Wraps', price: 16, desc: 'Authentic shawarma wrapped with pickles and spicy tahini.', image: '/images/wrap.png' },
  { id: 105, name: 'Burger Meal', category: 'Meals', price: 24, desc: 'Classic beef burger served with golden fries and a refreshing drink.', image: '/images/burger.png' },
  { id: 106, name: 'Lunch Meal', category: 'Meals', price: 36, desc: 'Crispy broasted chicken pieces with a side of coleslaw, fries, and drink.', image: '/images/chicken.png' },
  { id: 107, name: 'Prawns Meal', category: 'Meals', price: 29, desc: 'Crispy fried prawns cooked to perfection. Includes fries and dipping sauce.', image: '/images/prawns.png' },
  { id: 108, name: 'Golden Fries', category: 'Sides', price: 10, desc: 'Crispy golden french fries, perfectly salted.', image: '/images/burger.png' },
  { id: 109, name: 'Coleslaw Salad', category: 'Sides', price: 8, desc: 'Fresh cabbage and carrots in a creamy dressing.', image: '/images/wrap.png' },
  { id: 110, name: 'Cola Beverage', category: 'Drinks', price: 5, desc: 'Chilled refreshing cola drink.', image: '/images/chicken.png' },
  { id: 111, name: 'Fresh Orange Juice', category: 'Drinks', price: 8, desc: 'Freshly squeezed orange juice.', image: '/images/burger.png' }
];

const categories = ['All', 'Burgers', 'Meals', 'Wraps', 'Sides', 'Drinks'];

function Products() {
  const { addToCart, cartItemsCount, cartTotal } = useCart();
  const [quantities, setQuantities] = useState({});
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(item => item.category === activeCategory);

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
    setQuantities((prev) => ({ ...prev, [item.id]: 1 }));
  };

  return (
    <section className="py-5 position-relative" style={{ minHeight: 'calc(100vh - 140px)' }}>
      <Container className="mt-5 mb-5 pb-5">
        <div className="text-center mb-5">
          <h2 className="display-4 text-light fw-bold">All <span className="text-yellow">Products</span></h2>
          <p className="text-muted fs-5">Browse our complete menu</p>
        </div>

        {/* Category Filters */}
        <div className="d-flex justify-content-center flex-wrap mb-5 gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "warning" : "outline-warning"}
              className={`rounded-pill px-4 py-2 fw-bold ${activeCategory === category ? 'text-dark' : 'text-yellow'}`}
              onClick={() => setActiveCategory(category)}
              style={activeCategory === category ? { background: 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)', border: 'none' } : {}}
            >
              {category}
            </Button>
          ))}
        </div>

        <Row className="g-4">
          {filteredProducts.map((item) => {
            const currentQty = quantities[item.id] || 1;
            return (
              <Col md={6} lg={4} key={item.id}>
                <Card className="h-100 border-0 shadow overflow-hidden" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '15px' }}>
                  <Card.Img variant="top" src={item.image} alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Card.Title className="text-light fw-bold mb-0">{item.name}</Card.Title>
                      <Badge bg="warning" text="dark" className="fs-6 px-3 py-2 rounded-pill" style={{ background: 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)', border: 'none' }}>
                        {item.price} AED
                      </Badge>
                    </div>
                    <Card.Text className="text-light mt-2 flex-grow-1" style={{ opacity: 0.9 }}>
                      {item.desc}
                    </Card.Text>
                    
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div className="d-flex align-items-center bg-dark rounded-pill overflow-hidden border border-warning" style={{ borderColor: 'rgba(255,215,0,0.3) !important' }}>
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
                      
                      <Button variant="warning" className="fw-bold px-4 rounded-pill" onClick={() => handleAddToCartClick(item)} style={{ background: 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)', border: 'none' }}>
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

      {/* Floating Cart Summary */}
      {cartItemsCount > 0 && (
        <div className="position-fixed bottom-0 start-0 w-100 p-3" style={{ zIndex: 1000 }}>
          <Container>
            <div className="text-dark rounded-pill p-3 shadow-lg d-flex justify-content-between align-items-center" style={{ background: 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)' }}>
              <div className="d-flex align-items-center ps-3">
                <i className="bi bi-cart-fill fs-4 me-3"></i>
                <div>
                  <h6 className="mb-0 fw-bold">{cartItemsCount} Items in Cart</h6>
                  <p className="mb-0 small fw-bold">Total: {cartTotal} AED</p>
                </div>
              </div>
              <Button as={Link} to="/cart" variant="dark" className="rounded-pill px-4 py-2 fw-bold d-flex align-items-center text-decoration-none border-0 text-yellow">
                View Cart <i className="bi bi-arrow-right fs-5 ms-2"></i>
              </Button>
            </div>
          </Container>
        </div>
      )}
    </section>
  );
}

export default Products;
