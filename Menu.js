import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await axios.get('/api/menu');
      setMenuItems(response.data);
    };
    fetchMenu();
  }, []);

  const handleOrderChange = (itemId) => {
    setOrder((prevOrder) => {
      if (prevOrder.includes(itemId)) {
        return prevOrder.filter((id) => id !== itemId);
      } else {
        return [...prevOrder, itemId];
      }
    });
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/menu/order', { itemIds: order });
      alert('Order placed successfully!');
    } catch (err) {
      alert('Error placing order');
    }
  };

  return (
    <div className="mt-5">
      <h2>Menu</h2>
      <form onSubmit={handleOrderSubmit}>
        {menuItems.map((item) => (
          <div key={item._id} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={`item_${item._id}`}
              value={item._id}
              onChange={() => handleOrderChange(item._id)}
            />
            <label className="form-check-label" htmlFor={`item_${item._id}`}>
              {item.name} - ${item.price}
            </label>
          </div>
        ))}
        <button type="submit" className="btn btn-primary mt-3">Order</button>
      </form>
    </div>
  );
}

export default Menu;
