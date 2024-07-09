import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetails from './ProductDetails';


const product = {
  name: 'Sample Product',
  description: 'This is a great product.',
  price: 99.99,
  category: 'Electronics',
  images: [
    'https://via.placeholder.com/400x400.png?text=Image+1',
    'https://via.placeholder.com/400x400.png?text=Image+2',
    'https://via.placeholder.com/400x400.png?text=Image+3'
  ]
};

ReactDOM.render(<ProductDetails product={product} />, document.getElementById('root'));
