import React from 'react'
import dress1 from '../../assets/images/dress1.png'
import dress2 from '../../assets/images/dress2.png'
import dress9 from '../../assets/images/dress9.png'


const AddToCart = ({ item }) => (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <span>{item.price}</span>
        <div className="item-controls">
          <label>Size:</label>
          <div className="sizes">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
          <label>Quantity:</label>
          <input type="number" min="1" value={item.quantity} />
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
  const CartItem = () => {
    const items = [
      {
        image:dress1,
        name: 'SHEIN: Roupas Femininas gown',
        description: 'Blue gown',
        price: '$39.99',
        quantity: 1,
      },

      {
        image:dress2,
        name: 'Salferodo: Long Sleeve gown',
        description: 'Wine color gown',
        price: '$39.99',
        quantity: 1,
      },
      {
        image:dress9,
        name: 'Salferodo: Long Sleeve gown',
        description: 'Emerald green gown',
        price: '$59.99',
        quantity: 2,
      },
      
    ];
  
    return (
      <div className="cart">
        <div className="cart-header">
          <h2>
            <span className="arrow-icon">&#8592;</span> Shopping Cart
          </h2>
          <button className="clear-cart">Clear cart</button>
        </div>
        <div className="cart-items">
          {items.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Subtotal: $140.45</p>
          <p>Shipping fee: $30</p>
          <p>Total amount: $170.45</p>
          <button>Proceed to Checkout</button>
          <input type="text" placeholder="Enter coupon code" />
          <button>Apply Coupon</button>
        </div>
      </div>
    );
  };

  export default AddToCart;
    