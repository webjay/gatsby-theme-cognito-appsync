import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Authenticator, Greetings } from 'aws-amplify-react';

function Auth({ children }) {
  const [signedIn, setSignedIn] = useState(false);
  function onStateChange(authState) {
    setSignedIn(authState === 'signedIn');
  }
  return (
    <Authenticator hide={[Greetings]} onStateChange={onStateChange}>
      {signedIn === true && children}
    </Authenticator>
  );
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
