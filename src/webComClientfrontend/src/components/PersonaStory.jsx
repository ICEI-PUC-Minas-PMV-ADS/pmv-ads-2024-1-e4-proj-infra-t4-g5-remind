import PropTypes from 'prop-types';

const PersonaStory = ({ imageUrl, quote, position }) => {
    return (
      <div className="flex flex-col w-full relative">
        <img src={imageUrl} alt="persona" className="userStories-video g_grow" />
        <div className="userStories-video-container g_grow flex-1 flex-center" 
          style={{
            position: 'absolute',
            ...position
          }}
        >
          <p className="userStories-video g_grow italic">
            <span className="text-white font-bold">{quote}</span>
          </p>
        </div>
      </div>
    );
  };

  PersonaStory.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    position: PropTypes.object.isRequired,
  };
  
  export default PersonaStory;
  