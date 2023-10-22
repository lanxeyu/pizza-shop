import { useState } from 'react';
import { Pizza } from '../../utilities/pizza';
import { CheckoutFooter, EditPizza } from '../../components';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import './style.css'

function Cart() {

  const [cart, setCart] = useState([]);
  const [show, setShowEditModal] = useState([]);
  const [selectedPizzaIndex, setSelectedPizzaIndex] = useState(null);

  const handleAddPizza = () => {
    const pizza = new Pizza();
    setCart((prevCart) => [...prevCart, pizza]);
    setShowEditModal((prevShowEditModal) => [...prevShowEditModal, false]);
  }

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
    setShowEditModal((prevShowEditModal) => {
      const updatedShowEditModal = [...prevShowEditModal];
      updatedShowEditModal.splice(index, 1);
      return updatedShowEditModal;
    });
  }

  const handleClose = () => {
    setShowEditModal((prevShowEditModal) => {
      const updatedShowEditModal = [...prevShowEditModal];
      updatedShowEditModal[selectedPizzaIndex] = false;
      return updatedShowEditModal;
    });
    setSelectedPizzaIndex(null);
  }

  const handleShowEditModal = (index) => {
    setSelectedPizzaIndex(index);
    setShowEditModal((prevShowEditModal) => {
      const updatedShowEditModal = [...prevShowEditModal];
      updatedShowEditModal[index] = true;
      return updatedShowEditModal;
    });
  }

  console.log('Cart', cart)

  return (
    <Card className="text-center">
      <Card.Body>

        <Button onClick={handleAddPizza}>Add Pizza</Button>

        <div className='cart'>
          <h2>Cart:</h2>

          {/* Dynamically generate pizza list */}
          {cart.map((pizza, index) => (
            <div key={index}>
              <h3>Pizza {pizza.name}</h3>


              {/* Edit pizza modal */}
              <Button onClick={() => handleShowEditModal(index)}>Edit</Button>
              <Modal show={show[index]} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                  <EditPizza pizza={pizza}></EditPizza>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleClose}>Save</Button>
                </Modal.Footer>
              </Modal>
              

              <p>Size: {pizza.size}</p>
              <p>Toppings: {pizza.getPizzaDetails().toppings.join(', ')}</p>
              <p>Price: £{pizza.getPizzaDetails().pizzaPrice}</p>
              <CloseButton onClick={() => removeFromCart(index)} />
            </div>
          ))}
        </div>

        
        <div className='checkoutFooter'>
          <CheckoutFooter cart={cart}/>
        </div>

      </Card.Body>
    </Card>
  );
}

export default Cart;
