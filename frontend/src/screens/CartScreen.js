import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';

import Message from '../components/Message.js';
import { addToCart } from '../actions/cartActions.js';

const CartScreen = () => {
  const { id } = useParams();
  const productId = id;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const qty = searchParams.get('qty');
  console.log('Quantity selected =', qty);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log('CURRENT CART - ', cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>Cart</div>;
};

export default CartScreen;
