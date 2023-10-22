import { useState } from 'react';
import { Pizza } from '../../lib/pizza';
import { Edit } from '../../components';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';

function Cart() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState([]);
  const [selectedPizzaIndex, setSelectedPizzaIndex] = useState(null);

  const handleAddPizza = () => {
    const pizza = new Pizza();
    setCart((prevCart) => [...prevCart, pizza]);
    setShow((prevShow) => [...prevShow, false]);
  }

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
    setShow((prevShow) => {
      const updatedShow = [...prevShow];
      updatedShow.splice(index, 1);
      return updatedShow;
    });
  }

  const handleClose = () => {
    setShow((prevShow) => {
      const updatedShow = [...prevShow];
      updatedShow[selectedPizzaIndex] = false;
      return updatedShow;
    });
    setSelectedPizzaIndex(null);
  }

  const handleShow = (index) => {
    setSelectedPizzaIndex(index);
    setShow((prevShow) => {
      const updatedShow = [...prevShow];
      updatedShow[index] = true;
      return updatedShow;
    });
  }

  return (
    <>
      <Button onClick={handleAddPizza}>Add Pizza</Button>

      <div>
        <h2>Cart:</h2>

        {/* Pizza list */}
        {cart.map((pizza, index) => (
          <div key={index}>
            <h3>Pizza {pizza.name}</h3>


            {/* Edit pizza modal */}
            <Button onClick={() => handleShow(index)}>Edit</Button>
            <Modal show={show[index]} onHide={handleClose} backdrop="static" keyboard={false}>
              <Modal.Header>
                <Modal.Title>Edit this pizza</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Edit pizza={pizza}></Edit>
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
    </>
  );
}

export default Cart;
