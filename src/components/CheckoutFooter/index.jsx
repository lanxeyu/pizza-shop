import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Confirmation from '../Confirmation';
import Form from 'react-bootstrap/Form';
import { generateRandom8DigitNumber, runSendOrderDataToApi } from '../../utilities/script';
import './style.css'

const CheckoutFooter = ({ cart }) => {
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState('');
  const [order, setOrder] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalCartPrice = cart.reduce((total, pizza) => total + parseFloat(pizza.price), 0);
  const revenue = totalCartPrice.toFixed(2)
  const order_number = generateRandom8DigitNumber()

  const handlePlaceOrder = () => {
    const newOrder = {
      order_number,
      cart,
      revenue,
      notes,
    };

    runSendOrderDataToApi(newOrder)
    setOrder(newOrder);
    handleShow();
  };

  return (
    <Card className="text-center">
      <Card.Body>

        <div className="checkout-footer row">
          <div className="col-md-8">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Allergy information & special notes:</Form.Label>
              <Form.Control as="textarea" rows={1} value={notes} onChange={(e) => setNotes(e.target.value)}/>
            </Form.Group>
          </div>

          <div className="total-cart-price-and-place-order-btn col-md-4">
            <Card.Title id='total-cart-price'>Total: £{totalCartPrice.toFixed(2)}</Card.Title>
            <Button id='place-order-btn' variant="warning" onClick={handlePlaceOrder} disabled={cart.length === 0}>Place Order</Button>
          </div>
        </div>


        {/* Order confirmation modal */}
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header><h6>Order Confirmation</h6></Modal.Header>
          <Modal.Body>
            <Confirmation order={order}></Confirmation>
          </Modal.Body>
          <Modal.Footer>
            You have gained X points for this order. Create an account to spend points on Pizza Shop promos!
            <Button variant="outline-dark" onClick={handleClose}>Back to Shop</Button>
            <Button variant="warning">Create Account</Button>
            {/* Create an account page and points system to be implemented */}
          </Modal.Footer>
        </Modal>

      </Card.Body>
    </Card>
  );
};

CheckoutFooter.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default CheckoutFooter;
