import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy;, {`<3 by`}
            <a href='https://navjotbedi.me'> Navjot S. Bedi</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
