import PropTypes from 'prop-types';

//Preciso melhorar o css para ativa este componente
const Persona = ({ name, role, description }) => {
    return (
      <div className="flex-1 flex-center">
        <p className="userStories-text g_text" style={{textAlign: 'left'}}>
          <span className="text-white">{name}</span> é {role}. {description}
        </p>
      </div>
    );
  };
  Persona.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  
  
  export default Persona;
  