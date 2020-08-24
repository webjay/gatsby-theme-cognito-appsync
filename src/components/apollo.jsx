import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';
import client from '../client';

function ApolloWrap({ children }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

ApolloWrap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApolloWrap;
