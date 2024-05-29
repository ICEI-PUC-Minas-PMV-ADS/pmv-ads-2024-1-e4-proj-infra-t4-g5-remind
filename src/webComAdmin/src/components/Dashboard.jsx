import PropTypes from 'prop-types';

const DashboardComponent = ({ user }) => {
  // component logic here
  return <div>Welcome, {user.name}</div>;
};

DashboardComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default DashboardComponent;
