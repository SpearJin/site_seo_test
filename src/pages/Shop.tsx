import React from 'react';
import { Helmet } from 'react-helmet-async';

function Shop() {
  return (
    <div>
      <Helmet>
        <title>Shop</title>
        <meta name='description' content='SHop our lastes products now.' />
        <link rel='canonical' href='/shop' />
      </Helmet>
      <p>가게</p>
    </div>
  );
}

export default Shop;
