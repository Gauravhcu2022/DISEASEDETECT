import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import HomeIcon from '@mui/icons-material/Home';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [showAllProductsDropdown, setShowAllProductsDropdown] = useState(false);

  // Use location to get the current path
  const location = useLocation();

  useEffect(() => {
    // Extract the path from the location object
    const path = location.pathname;

    // Map the path to the corresponding menu item and set it as active
    if (path === '/') {
      setActiveMenuItem('item1');
    } else if (path === '/all') {
      setActiveMenuItem('item2');
    } else if (path === '/about') {
      setActiveMenuItem('item3');
    }
    // Add more conditions for other pages if needed
  }, [location.pathname]);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    // Add any additional logic you need when a menu item is clicked
  };

  

  const handleToggleDropdown = () => {
    setShowAllProductsDropdown(!showAllProductsDropdown);
  };

  const handleAllProductsItemClick = () => {
    // Close the dropdown when an item is clicked
    setShowAllProductsDropdown(false);
    // Call the existing function for clicking "All Products"
    handleMenuItemClick('item2');
  };

  return (
    <div className={`navbar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
  <div className="nav-content">
    <div className="menu-btn" onClick={handleToggleSidebar}>
      <MenuIcon className='nav-icon' style={{ fontSize: 35 }} />
    </div>
    <div className="search-bar-m">
    <input
        type="text"
        placeholder="Search..."
      />
      <button ><SearchIcon /></button>
      </div>
  </div>
  <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
    <div className="sidebar-header" onClick={handleSidebarClose}>
      Menu
    </div>
    <a
      href="/"
      className={activeMenuItem === 'item1' ? 'active' : ''}
      onClick={() => handleMenuItemClick('item1')}
    >
      <HomeIcon className='icon-l'/>Home
    </a>
    {/* All Products dropdown */}
    <div className={`dropdown ${showAllProductsDropdown ? 'show' : ''}`}>
      <div className='dropdownmix'>
        <a
        href="/all"
        className={`dropdown-header ${activeMenuItem === 'item2' ? 'active' : ''}`}
        onClick={() => handleMenuItemClick('item2')}
      >
        <LocalGroceryStoreIcon  />
        <span>All Products</span>
      </a>
      <a className="arrow-icon" onClick={handleToggleDropdown}>
        <ArrowDropDownIcon className={showAllProductsDropdown ? 'rotate' : ''} />
      </a>
      </div>
      <div className={`dropdown-menu ${showAllProductsDropdown ? 'show' : ''}`}>
        {/* Add dropdown items here */}
        <a href="/traps" onClick={handleAllProductsItemClick}>Sticky Traps</a>
        <a href="/neemoil" onClick={handleAllProductsItemClick}>Neem Oil</a>
        <a href="/mixingoil" onClick={handleAllProductsItemClick}>Mixing Oil</a>
        {/* Add more categories if needed */}
      </div>
    </div>
    <a
      href="/about"
      className={activeMenuItem === 'item3' ? 'active' : ''}
      onClick={() => handleMenuItemClick('item3')}
    >
      <BusinessIcon className='icon-l'/> About Us
    </a>
    <div className="search-bar-l">
    <input
        type="text"
        placeholder="Search..."
      />
      <button ><SearchIcon /></button>
      </div>
  </div>
  
</div>

  );
};

export default Navbar;
