import React from 'react';
import PropTypes from 'prop-types';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import useAuth from '../hooks/auth';

const styleCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function AuthWrap({ children, center, usernameAlias, style }) {
  const signedin = useAuth();
  function getStyle() {
    return center === true ? [styleCenter, style] : style;
  }
  if (signedin === true) return children;
  return (
    <div style={getStyle()}>
      <AmplifyAuthenticator usernameAlias={usernameAlias} />
    </div>
  );
}

AuthWrap.defaultProps = {
  children: null,
  center: true,
  usernameAlias: undefined,
  style: {},
};

AuthWrap.propTypes = {
  children: PropTypes.node,
  center: PropTypes.bool,
  usernameAlias: PropTypes.string,
  style: PropTypes.shape,
};

export default AuthWrap;
