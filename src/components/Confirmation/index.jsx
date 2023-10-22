import PropTypes from 'prop-types';
import { generateRandom8DigitNumber } from '../../utilities/script';


const Confirmation = ({ order }) => {

    const orderNumber = generateRandom8DigitNumber()

    return (
        <>
            <h4>Thank you!</h4>
            <p>Your order is now being prepared and will be delivered to you in X minutes.</p>
            <p>Order #{orderNumber}</p>
            {/* Estimated time of delivery to be implemented */}
            {order.cart.map((pizza, index) => (
            <div key={index}>
                <h5>Pizza {pizza.name}</h5>
                <p>Size: {pizza.size}</p>
                <p>Toppings: {pizza.getPizzaDetails().toppings.join(', ')}</p>
            </div>
            ))}
        </>
    )
}

Confirmation.propTypes = {
    order: PropTypes.object.isRequired
};

export default Confirmation