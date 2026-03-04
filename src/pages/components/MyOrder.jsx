import React from 'react';
import MyOrderData from './data/MyOrderData'
import MyOrderCard from './cards/MyOrderCard';
import '../styles/MyOrder.css';

function MyOrder() {
  return (
    <div className='cart-wrapper-background'>
        <div className="cart-wrapper">
      <h2 style={{ marginBottom: '20px' }}>Your Cart</h2>
      
      <div className="order-list">
        {MyOrderData.map((meal) => (
          <MyOrderCard key={meal.id} item={meal} />
        ))}
      </div>

      <a href="#" className="footer-link">
        + Add more items from Chuks Kitchen
      </a>
    </div>
    </div>
    
  );
}

export default MyOrder;