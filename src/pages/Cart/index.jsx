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

  return (
    <>
      <Button className="add-pizza-btn" onClick={handleAddPizza}>Add Pizza</Button>
      <h3 className='cart-title'>Cart:</h3>

      {/* Dynamically generate pizza list */}
      <div className='pizza-list col-md-10'>
        {cart.map((pizza, index) => (
          <Card className='pizza-item text-center col-lg-3 col-md-4 col-xs-8' key={index} >

            <Card.Header className='pizza-name-and-btns'>
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

              <CloseButton onClick={() => removeFromCart(index)} />
            </Card.Header>

            <Card.Body className='pizza-details'>
              <p><b>Size:</b> {pizza.size}</p>
              {pizza.getPizzaDetails().toppings.length > 0 ? (
                  <p><b>Toppings:</b> {pizza.getPizzaDetails().toppings.join(', ')}</p>
                ) : (
                  <p><b>Toppings:</b> No toppings selected</p>
                )}
            </Card.Body>
            <Card.Footer>
              <h5 className='pizza-price'>£{pizza.getPizzaDetails().pizzaPrice}</h5>

            </Card.Footer>
          </Card>
        ))}
      </div>    

      
      <div className='checkoutFooter'>
        <CheckoutFooter cart={cart}/>
      </div>
    </>


  );
}

export default Cart;
