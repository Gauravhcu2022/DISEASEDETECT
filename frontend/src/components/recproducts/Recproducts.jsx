// recproducts.js

import React from 'react';
import './recproducts.css'
import product1 from '../Assets/Images/1.JPG';
import product2 from '../Assets/Images/2.JPG';
import product3 from '../Assets/Images/3.JPG';
import product4 from '../Assets/Images/4.JPG';
import customersupport from '../Assets/banner/customersupport.png'

const BestSellerProduct = ({ name, price, rating, image, isFirstItem = false }) => (
  <div className={`product ${isFirstItem ? 'first-item' : ''}`}>
    <img src={image} alt={name} className="product-image" />
    <h3>{name}</h3>
    <div className="product-info">
      <p>{price.toFixed(2)}</p>
      <div className="rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span key={i} className="star">
              ★
            </span>
          ))}
      </div>
    </div>
  </div>
);

const Recproducts = () => {
  const products = [
    { name: 'Yellow Sticky Traps', price: 14.99, rating: 5, image: product1 },
    { name: 'Blue Sticky Traps', price: 14.99, rating: 5, image: product2 },
    { name: 'Neem Oil', price: 14.99, rating: 5, image: product3 },
    { name: 'Mixing Oil', price: 14.99, rating: 3, image: product4 },
  ];

  return (
    <div>
      <div className="head"><h2>Recomended Products</h2></div>
      <div className="best-seller-products">
        {products.map((product, index) => (
          <BestSellerProduct
            key={product.name}
            {...product}
            isFirstItem={index === 0}
          />
        ))}
      </div>
      <button className="view-all">View All &gt;</button>
      <div class="customer-support-banner">
        <div class="text-section">
          <h2>Need Help?</h2>
          <p>Contact our customer support team for assistance.</p>
          <button>Contact Us</button>
        </div>
          <img src={customersupport} alt="Customer Support" className="customerImage"/>
      </div>
    </div>
  );
};

export default Recproducts;
