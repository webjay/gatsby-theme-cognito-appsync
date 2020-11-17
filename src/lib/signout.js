import Auth from '@aws-amplify/auth';

function signout() {
  return Auth.signOut();
}

export default signout;
