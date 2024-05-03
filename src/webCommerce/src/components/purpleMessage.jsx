'use strict';

import PropTypes from 'prop-types';

const PurpleMessage = ({ id, title, message, initials }) => {
  return (
    <div id={id} className='opacity-70'>
      <div className="w-72 h-16 bg-transparent rounded-lg border border-purple-800 flex justify-end items-center pr-2 p-2">
        <div className="flex flex-col justify-center h-full w-64 px-2 opacity-80">
          <div className="text-xs font-semibold text-neutral-300 mb-1">{title}</div>
          <div className="text-xs text-gray-500">{message}</div>
        </div>
        <div className='mr-1'>
          <div className="flex items-center justify-center w-10 h-10">
            <div className="border-2 border-purple-700 rounded-full w-10 h-10  flex items-center justify-center">
              <span className="text-purple-700 text-xl uppercase">{initials}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PurpleMessage.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    initials: PropTypes.string.isRequired,
  };

export default PurpleMessage;
