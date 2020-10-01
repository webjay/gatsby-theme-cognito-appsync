import { useState, useEffect } from 'react';
import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components';
import userInfo from '../lib/user';

const { SignedIn } = AuthState;

function useAuth() {
  const [authState, setAuthState] = useState(null);
  function onUserInfo(username) {
    const state = username === null ? false : SignedIn;
    setAuthState(state);
  }
  function authDetect() {
    userInfo().then(onUserInfo);
    return onAuthUIStateChange(setAuthState);
  }
  useEffect(authDetect, []);
  if (authState === null) return null;
  return authState === SignedIn;
}

export default useAuth;
