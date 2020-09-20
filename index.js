import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import client from './src/client';
import userInfo from './src/lib/user';
import signout from './src/lib/signout';
import useAuth from './src/hooks/auth';

export {
  client,
  userInfo,
  signout,
  useAuth,
  AmplifyAuthenticator,
};
