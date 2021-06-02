import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../functions/userFunctions';

const Header = () => {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart; 
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch()
  const signoutHandler = () => {
    dispatch(signout());
  }

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
          {userInfo ? (
            <div className="dropdown">
              <Link to="#">
                {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
              </Link>
              <ul className="dropdown-content">
                <Link to="#signout" onClick={signoutHandler}>
                  Sign Out
                </Link>
              </ul>
            </div>
          ) : (
            <Link to="/signin">
              <i class="fa fa-sign-in"></i> Sign In
            </Link>
          )}
        </div>
      </header>
    );
}

export default Header
