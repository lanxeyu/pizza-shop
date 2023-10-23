import PropTypes from 'prop-types';

const Confirmation = ({ order }) => {

    return (
        <>
            <h4>Thank you!</h4>
            <p>Your order is now being prepared and will be delivered to you in X minutes.</p>
            <p>Order #{order.order_number}</p>
            {/* Estimated time of delivery to be implemented */}
            {order.cart.map((pizza, index) => (
            <div key={index}>
                <h5>Pizza {pizza.name}</h5>
                <p>Size: {pizza.size}</p>
                <p>Toppings: {pizza.getPizzaDetails().toppings.join(', ')}</p>
            </div>
            ))}
            <h5>Total: £{order.revenue}</h5>
        </>
    )
}

Confirmation.propTypes = {
    order: PropTypes.object.isRequired
};

export default Confirmation