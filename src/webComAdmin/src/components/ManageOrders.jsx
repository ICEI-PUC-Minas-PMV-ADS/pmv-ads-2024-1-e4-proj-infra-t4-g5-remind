import PropTypes from 'prop-types';

const ManageOrdersComponent = ({ orders }) => {
  return (
    <div>
      {orders.map(order => (
        <div key={order.id}>{order.name}</div>
      ))}
    </div>
  );
};

ManageOrdersComponent.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ManageOrdersComponent;
