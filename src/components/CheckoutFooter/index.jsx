import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CheckoutFooter = ({ totalCartPrice }) => {
    return (
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Total: £{totalCartPrice.toFixed(2)}</Card.Title>
          <Button variant="primary">Checkout</Button>
        </Card.Body>
      </Card>
    );
}

CheckoutFooter.propTypes = {
    totalCartPrice: PropTypes.number.isRequired
};

export default CheckoutFooter;
