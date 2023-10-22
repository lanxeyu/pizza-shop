import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CheckoutFooter = ({ cart }) => {

  const totalCartPrice = cart.reduce((total, pizza) => total + parseFloat(pizza.getPizzaDetails().pizzaPrice), 0);

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Total: £{totalCartPrice.toFixed(2)}</Card.Title>
        <Button variant="primary">
          Checkout
        </Button>
      </Card.Body>
    </Card>
  );
};

CheckoutFooter.propTypes = {
    cart: PropTypes.array.isRequired
};

export default CheckoutFooter;
