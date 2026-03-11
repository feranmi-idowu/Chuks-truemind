import React, { useState } from 'react';

const MyOrderCard = ({ item }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => setCount(prev => prev + 1);
  const handleDecrease = () => {
    if (count > 1) setCount(prev => prev - 1);
  };

  return (
    <div className="order-card">
      <div className="image-container">
        <img loading="eager" fetchpriority="high" src={item.image} alt={item.name} />
      </div>

      <div className="item-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>

      <div className="quantity-section">
        <button onClick={handleIncrease} className="control-btn">+</button>
        <span className="count-display">{count}</span>
        <button onClick={handleDecrease} className="control-btn">-</button>
      </div>

      <div className="price-tag">
        ₦{(item.price * count).toLocaleString()}
      </div>

      <button className="delete-icon">×</button>
    </div>
  );
};

export default MyOrderCard;