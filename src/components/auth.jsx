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

function AuthWrap({ children, center }) {
  const signedin = useAuth();
  if (signedin === true) return children;
  const style = center === true ? styleCenter : {};
  return (
    <div style={style}>
      <AmplifyAuthenticator />
    </div>
  );
}

AuthWrap.defaultProps = {
  center: true,
};

AuthWrap.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
};

export default AuthWrap;
