// import { client } from 'gatsby-plugin-appsync';
import { Auth } from 'aws-amplify';

function signout() {
  Auth.signOut();
}

export {
  // client,
  signout,
};
