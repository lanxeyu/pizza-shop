import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Confirmation from '../Confirmation';
import Form from 'react-bootstrap/Form';
import './style.css';

const CheckoutFooter = ({ cart }) => {
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState('');
  const [order, setOrder] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalCartPrice = cart.reduce((total, pizza) => total + parseFloat(pizza.getPizzaDetails().pizzaPrice), 0);
  const revenue = totalCartPrice.toFixed(2)

  const handlePlaceOrder = () => {
    const newOrder = {
      cart,
      revenue,
      notes
    };
    setOrder(newOrder);
    handleShow();
  };

  console.log('Order', order)

  return (
    <Card className="text-center">
      <Card.Body>

        <div className="checkout-footer">
          <div className="form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Allergy information & special notes:</Form.Label>
              <Form.Control as="textarea" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)}/>
            </Form.Group>
          </div>

          <div>
            <Card.Title>Total: £{totalCartPrice.toFixed(2)}</Card.Title>
            <Button onClick={handlePlaceOrder} variant="primary">Place Order</Button>
          </div>
        </div>


        {/* Order confirmation modal */}
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header><h5>Order Confirmation</h5></Modal.Header>
          <Modal.Body>
            <Confirmation order={order}></Confirmation>
          </Modal.Body>
          <Modal.Footer>
            You have gained X points for this order. Create an account to spend points on Pluto&apos;s Pizza promos!
            <Button variant="primary">Create Account</Button>
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
