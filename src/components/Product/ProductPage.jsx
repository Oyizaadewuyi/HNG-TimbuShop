import React from 'react';
import './ProductPage.css';
import dress1 from '../../assets/images/dress1.png'
import dress2 from '../../assets/images/dress2.png'
import dress3 from '../../assets/images/dress3.png'
import dress4 from '../../assets/images/dress4.png'
import dress5 from '../../assets/images/dress5.png'
import dress6 from '../../assets/images/dress6.png'
import dress7 from '../../assets/images/dress7.png'
import dress8 from '../../assets/images/dress8.png'
import dress9 from '../../assets/images/dress9.png'


const products = [
  { 
    name: 'SHEIN: Roupas Feminas gown', 
    price: '$39.99', 
    sizes: ['S', 'M', 'L', 'XL'],
     image:dress1
     },
  { 
    name: 'SAFEIRODO: Long Sleeve loose gown',
     price: '$59.99', 
     sizes: ['S', 'M', 'L', 'XL'], 
     image:dress2 
    },
  { 
    name: 'FISDY: Stylish long Sleeve dress with flounced Hem',
     price: '$70.00', 
     sizes: ['S', 'M', 'L', 'XL'], 
     image:dress3 
     },
  { 
    name: 'Sweet Elegance Solid Fold Square Collar A line gown',
     price: '$99.99', 
     sizes: ['S', 'M', 'L', 'XL'], 
     image:dress4
     },
  { 
    name: 'Surplice Neck Tie Waist Long Sleeve Dress', 
    price: '$85.00', 
    sizes: ['S', 'M', 'L', 'XL'], 
    image:dress5
 },
  { 
    name: 'Rushed V Neck Bodycon Mini Dress', 
    price: '$99.99', 
    sizes: ['S', 'M', 'L', 'XL'], 
    image:dress6 
},
  { 
    name: 'SHEIN: Ruffled Floral Bodycon gown', 
    price: '$59.99', 
    sizes: ['S', 'M', 'L', 'XL'], 
    image: dress7
 },
  { 
    name: 'FISDY: Classic V Neck Wrapped gown', 
    price: '$59.99', 
    sizes: ['S', 'M', 'L', 'XL'], 
    image:dress8
 },
  { 
    name: 'Safereido: Long Sleeve loose gown',
     price: '$59.99', 
     sizes: ['S', 'M', 'L', 'XL'], 
     image:dress9
     },
];

const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <div className="sizes">
              {product.sizes.map((size) => (
                <span key={size}>{size}</span>
              ))}
            </div>
            <p>{product.price}</p>
            <div className="quantityCart">
                <div className='quantity'>
                <button className='plus'>-</button>
              <span>1</span>
              <button className='minus'>+</button>
              
                </div>
              <button className="add-to-cart">Add to cart</button>
          
            </div>
            </div>
        ))}
      </div>
      <div className="pagination">
        <button>Preview</button>
        <span>1</span>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>Next</button>
      </div>
      </div>
      )
      };
      export default ProductPage;
