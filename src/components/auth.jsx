import React from 'react';
import PropTypes from 'prop-types';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
// import '../config';

function AuthWrap({ children }) {
  return (
    <AmplifyAuthenticator>
      {children}
    </AmplifyAuthenticator>
  );
}

AuthWrap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthWrap;
