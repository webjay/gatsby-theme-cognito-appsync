import Auth from '@aws-amplify/auth';

function currentUserPoolUser({ username }) {
  return username;
}

function errHandler() {
  return null;
}

function userInfo() {
  return Auth
    .currentUserPoolUser({ bypassCache: true })
    .then(currentUserPoolUser)
    .catch(errHandler);
}

export default userInfo;
