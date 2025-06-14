import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cart, user, logout } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold' }}>Shop</Link>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link to="/">Home</Link>
          <Link to="/cart">
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </Link>
          {user ? (
            <>
              <span>{user.email}</span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;