import React from 'react'
import products from '../../ProductData/products';

    const Product = ({ product }) => {
        return (
          <div className="product-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <div className="product-sizes">
              {product.sizes.map((size) => (
                <span key={size} className="product-size">{size}</span>
              ))}
            </div>
            <div className="product-quantity">
              <button>-</button>
              <input type="number" defaultValue={1} min={1} />
              <button>+</button>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        );
      };
      
  

export default Product
