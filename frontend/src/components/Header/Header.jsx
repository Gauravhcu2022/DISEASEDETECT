import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // Import your CSS file for header styles
import companylogo from '../Assets/banner/companylogo.png';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={companylogo} alt="Company Logo" className="logo-img" />
        <span className="company-name">Kisan Organics</span>
      </div>
      <div className="menu-container">
        <button className="menu-button">
          <FontAwesomeIcon icon={faShoppingCart} />
          {/* <span className="cart-count">0</span> */}
        </button>
        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Log out</button>
          : <Link to='/login'><button className='menu-button'><PersonIcon /></button></Link>}
      </div>
    </header>
  );
}

export default Header;
