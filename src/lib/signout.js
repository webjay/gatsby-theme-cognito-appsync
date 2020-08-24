import Auth from '@aws-amplify/auth';

function signout() {
  Auth.signOut();
}

export default signout;
