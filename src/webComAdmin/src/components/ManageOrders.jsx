
// ManageOrders.jsx
import PropTypes from 'prop-types';

const ManageOrders = ({ orders }) => {
  return (
    <div>
      {orders.map(order => (
        <div key={order.id}>{order.name}</div>
      ))}
    </div>
  );
};

ManageOrders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ManageOrders;