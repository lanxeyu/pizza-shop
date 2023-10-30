import { useEffect, useState } from 'react';
import { Pizza } from '../../utilities/pizza';
import { CheckoutFooter, EditPizza } from '../../components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import './style.css'
import { updateElements } from './script.js';

function Cart() {
  
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);
  const [show, setShowEditModal] = useState([]);
  const [selectedPizzaIndex, setSelectedPizzaIndex] = useState(null);

  useEffect(() => {
    updateElements();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddPizza = () => {
    const pizza = new Pizza();
    setCart((prevCart) => [...prevCart, pizza]);
    setShowEditModal((prevShowEditModal) => [...prevShowEditModal, false]);

    let lastIndex = cart.length
    handleShowEditModal(lastIndex)
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
      localStorage.setItem('cart', JSON.stringify(cart));
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

  return (
    <>
      <Button variant='warning' className='add-pizza-btn' onClick={handleAddPizza}>Add Pizza</Button>
      {/* Dynamically generate pizza list */}
      <div className='pizza-list col-md-10'>
        {cart.map((pizza, index) => (
          <div className='text-center pizza-item col-lg-3 col-md-4 col-xs-8' key={index} >

            <div className='pizza-name-and-btns'>
              <img className='pizza-icon' src='/images/pizza-icon.png'></img>
              <h3>{index + 1}</h3>
              
              {/* Edit pizza modal */}
              <ButtonGroup>
                <Button variant='dark' onClick={() => handleShowEditModal(index)}>Edit</Button>
                <Modal show={show[index]} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
                  <Modal.Body>
                    <EditPizza pizza={pizza}></EditPizza>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant='warning' onClick={handleClose}>Save</Button>
                  </Modal.Footer>
                </Modal>
                <Button variant='outline-dark' onClick={() => removeFromCart(index)}>X</Button>

              </ButtonGroup>
            </div>

            <div className='pizza-details'>
              <p><b>Size:</b> {pizza.size}</p>
              {pizza.toppings.length > 0 ? (
                  <p><b>Toppings:</b> {pizza.toppings.join(', ')}</p>
                ) : (
                  <p><b>Toppings:</b> No toppings selected</p>
                )}
            </div>

            <div className='pizza-footer'>
              <h5 className='pizza-price'>£{pizza.price}</h5>
            </div>
          </div>
        ))}
      </div>    

      
      <div className='checkoutFooter col-md-10'>
        <CheckoutFooter cart={cart}/>
      </div>
    </>


  );
}

export default Cart;
