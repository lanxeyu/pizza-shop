import PropTypes from 'prop-types';
import './style.css'

const Confirmation = ({ order }) => {

    return (
        <>
            <div className='order-status-message'>
                <h2>Thank you!</h2><br></br>
                <p>Your order is now being prepared and will be delivered to you in X minutes.</p>
                <h5>Order #{order.order_number}</h5>
            </div>
            <br></br>
            {/* Estimated time of delivery to be implemented */}
            {order.cart.map((pizza, index) => (
            <div key={index}>
                <h6>Pizza {index + 1}</h6>
                <p>{pizza.size} - {pizza.toppings.length > 0 ? (
                  <>{pizza.toppings.join(', ')}</>
                ) : (
                  <>No toppings</>
                )}</p>
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