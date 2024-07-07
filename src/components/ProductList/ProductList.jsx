import React from 'react'
import products from '../../ProductData/products';
import Product from '../Product/Product';

 const ProductList = () => {
    return (
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  };      
  

export default ProductList;
