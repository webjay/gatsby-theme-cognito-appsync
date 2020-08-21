import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { client } from "gatsby-plugin-appsync";
import { Authenticator, Greetings } from 'aws-amplify-react';

function Auth({ children }) {
  const [signedIn, setSignedIn] = useState(false);
  function onStateChange(authState) {
    setSignedIn(authState === 'signedIn');
  }
  return (
    <Authenticator hide={[Greetings]} onStateChange={onStateChange}>
      <ApolloProvider client={client}>
        {signedIn === true && children}
      </ApolloProvider>
    </Authenticator>
  );
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
