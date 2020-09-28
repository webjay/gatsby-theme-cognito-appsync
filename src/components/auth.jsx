import React from 'react';
import PropTypes from 'prop-types';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import useAuth from '../hooks/auth';

const styleCenter = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function AuthWrap({ children, center, usernameAlias }) {
  const signedin = useAuth();
  if (signedin === true) return children;
  const style = center === true ? styleCenter : {};
  return (
    <div style={style}>
      <AmplifyAuthenticator usernameAlias={usernameAlias} />
    </div>
  );
}

AuthWrap.defaultProps = {
  children: null,
  center: true,
  usernameAlias: undefined,
};

AuthWrap.propTypes = {
  children: PropTypes.node,
  center: PropTypes.bool,
  usernameAlias: PropTypes.string,
};

export default AuthWrap;
