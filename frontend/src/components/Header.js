import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart; 

    return (
      <header className="row">
        <div>
          <Link className="brand" to="/">
            Clothes
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <i class="fa fa-shopping-cart"></i> Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          <Link to="/signin">
            <i class="fa fa-sign-in"></i> Sign In
          </Link>
        </div>
      </header>
    );
}

export default Header
