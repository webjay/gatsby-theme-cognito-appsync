import React from 'react';
import PropTypes from 'prop-types';
import AuthWrap from './auth';

function wrapRootElement({ element }) {
  return (
    <AuthWrap>
      {element}
    </AuthWrap>
  );
}

wrapRootElement.propTypes = {
  element: PropTypes.element.isRequired,
};

export default wrapRootElement;
