import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CardIcon from "../cart-icon/cart-icon";
import CardDropDown from "../cart-dropdown/cart-dropdown";

import "./header.scss";

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CardIcon />
      {hidden ? null : <CardDropDown />}
    </div>
  </div>
);

/** Get the state from */
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);