import { useState, useEffect } from 'react';
import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components';

const { SignedIn } = AuthState;

function useAuth() {
  const [authState, setAuthState] = useState();
  function authDetect() {
    return onAuthUIStateChange(setAuthState);
  }
  useEffect(authDetect, []);
  return authState === SignedIn;
}

export default useAuth;
