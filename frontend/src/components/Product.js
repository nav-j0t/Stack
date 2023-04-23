import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from '../components/Rating.js';

const Product = ({ product }) => {
  return (
    <Card className='my-3 py-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color='gold'
          />
        </Card.Text>

        <Card.Text as='h3'>{`$${product.price}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
