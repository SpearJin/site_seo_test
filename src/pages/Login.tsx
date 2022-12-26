import React from 'react';
import { Helmet } from 'react-helmet-async';

function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name='description' content='Login toto' />
        <link rel='canonical' href='/login' />
      </Helmet>
      <p>로그인</p>
    </div>
  );
}

export default Login;
