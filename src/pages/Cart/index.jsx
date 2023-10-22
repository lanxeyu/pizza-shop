import { useState } from 'react';
import { Pizza } from '../../lib/pizza';
import { CheckoutFooter, EditPizza } from '../../components';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
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

  const totalCartPrice = cart.reduce((total, pizza) => total + parseFloat(pizza.getPizzaDetails().pizzaPrice), 0);
  console.log('Cart', totalCartPrice)

  return (
    <>
      <Button onClick={handleAddPizza}>Add Pizza</Button>

      <div className='cart'>
        <h2>Cart:</h2>

        {/* Dynamically generate pizza list */}
        {cart.map((pizza, index) => (
          <div key={index}>
            <h3>Pizza {pizza.name}</h3>


            {/* Edit pizza modal */}
            <Button onClick={() => handleShowEditModal(index)}>Edit</Button>
            <Modal show={show[index]} onHide={handleClose} backdrop="static" keyboard={false}>
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
        <CheckoutFooter totalCartPrice={totalCartPrice}/>
      </div>
    </>
  );
}

export default Cart;
