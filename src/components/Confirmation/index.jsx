import PropTypes from 'prop-types';

const Confirmation = ({ order }) => {

    return (
        <>
            <h4>Thank you!</h4>
            <p>Your order is now being prepared and will be delivered to you in X minutes.</p>
            <h6>Order #{order.order_number}</h6><br></br>
            {/* Estimated time of delivery to be implemented */}
            {order.cart.map((pizza, index) => (
            <div key={index}>
                <h5>Pizza {index + 1}</h5>
                <p>{pizza.size} - {pizza.getPizzaDetails().toppings.join(', ')}</p>
            </div>
            ))}<br></br>
            <h5>Total: £{order.revenue}</h5>
        </>
    )
}

Confirmation.propTypes = {
    order: PropTypes.object.isRequired
};

export default Confirmation