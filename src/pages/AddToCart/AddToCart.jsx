
import React from 'react'
import dress1 from '../../assets/images/dress1.png'
import dress9 from '../../assets/images/dress9.png'
import dress2 from '../../assets/images/dress2.png'
import './AddToCart.css'



const AddToCart = () => {
  const cartItems = [
    { id: 1,
    
       name: 'SHEIN: Roupas Feminas gown', 
       color: 'Blue', price: 39.99, 
       size: 'M', 
       quantity: 1, 
       image:dress1
      },
    { id: 2, 
      name: 'Selfaido: Long Sleeve gown', 
      color: 'Emerald Green', 
      price: 59.99, 
      size: 'M', 
      quantity: 2,
      image:dress9
     },
    { id: 3,
       name: 'Salferedo: Long Sleeve gown', 
       color: 'Wine', 
       price: 39.99, 
       size: 'M', 
       quantity: 1,
       image:dress2
       }
];

const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
const shippingFee = 30.00;
const total = subtotal + shippingFee;

return (
    <div className="shopping-cart">
        <h1>Shopping Cart</h1>
        <h1>Clear Cart</h1>
        <div className="cart-items">
            {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                        <h2>{item.name}</h2>
                        <p>{item.color} gown</p>
                        <p>$ {item.price.toFixed(2)}</p>
                        <div className="size">
                            <label>Size: </label>
                            <select value={item.size}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        <div className="quantity">
                            <label>Quantity: </label>
                            <button>-</button>
                            <span>{item.quantity}</span>
                            <button>+</button>
                        </div>
                        <button className="remove">Remove</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Subtotal: $ {subtotal.toFixed(2)}</p>
            <p>Shipping fee: $ {shippingFee.toFixed(2)}</p>
            <p>Total amount: $ {total.toFixed(2)}</p>
            <button className="checkout">Proceed To Checkout</button>
            <div className="coupon">
                <label>Coupon Code</label>
                <input type="text" placeholder="Enter coupon code" />
                <button>Apply Coupon</button>
            </div>
        </div>
        </div>
)
 };
  export default AddToCart;
    