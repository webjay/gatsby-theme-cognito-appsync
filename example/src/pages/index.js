import React from 'react';
import { signout } from 'gatsby-theme-cognito-appsync';

export default function Home() {
  return (
    <div>
      this is it
      <p>
        <button onClick={signout}>signout</button>
      </p>
    </div>
  );
}
