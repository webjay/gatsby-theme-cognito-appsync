import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { ApolloProvider } from 'react-apollo';
import { Authenticator, Greetings } from 'aws-amplify-react';
// import client from '../config';

function Auth({ children }) {
  const [signedIn, setSignedIn] = useState(false);
  function onStateChange(authState) {
    setSignedIn(authState === 'signedIn');
  }
  return (
    <Authenticator hide={[Greetings]} onStateChange={onStateChange}>
      {/* <ApolloProvider client={client}> */}
        {signedIn === true && children}
      {/* </ApolloProvider> */}
    </Authenticator>
  );
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
