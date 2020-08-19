import React from 'react';
import PropTypes from 'prop-types';
import Auth from './auth';

function wrapRootElement({ element }) {
  return (
    <Auth>
      {element}
    </Auth>
  );
}

wrapRootElement.propTypes = {
  element: PropTypes.element.isRequired,
};

export default wrapRootElement;
