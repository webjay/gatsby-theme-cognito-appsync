import { useState, useEffect } from 'react';
import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components';
import userInfo from '../lib/user';

const { SignedIn } = AuthState;

function useAuth() {
  const [authState, setAuthState] = useState(null);
  function authDetect() {
    userInfo().then((username) => {
      const state = username === null ? false : SignedIn;
      setAuthState(state);
    });
    return onAuthUIStateChange(setAuthState);
  }
  useEffect(authDetect, []);
  if (authState === null) return null;
  return authState === SignedIn;
}

export default useAuth;
