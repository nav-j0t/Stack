import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';

import Rating from '../components/Rating.js';
import products from '../products.js';

const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  return (
    <>
      <Link to='/' className='btn btn-dark my-3'>
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image fluid src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color='gold'
              />
            </ListGroup.Item>
            <ListGroup.Item className='my-2'>
              Price :${product.price}
            </ListGroup.Item>
            <ListGroup.Item className='my-2'>
              Description :{product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col> Price: </Col>
                <Col> ${product.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className='my-2'>
              <Row>
                <Col>Status: </Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className='my-2'>
              <Button
                disabled={product.countInStock === 0}
                className='btn-block'
                type='button'
              >
                Add To Cart{' '}
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
