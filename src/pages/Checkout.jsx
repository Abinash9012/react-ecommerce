import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Checkout() {
  const { cart, user } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.title} />
              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div style={{ marginTop: '16px' }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Total: ${total.toFixed(2)}</p>
            <button
              className="pay-btn"
              onClick={() => alert('Stripe checkout would be implemented here')}
            >
              Pay Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;