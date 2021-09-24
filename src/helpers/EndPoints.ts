// Make use of one API to develop
// Test with all 3 APIs to ensure that the UI/functionality doesnt break
// We will check with all 3 APIs

// ProductList Api - to be used in Home.tsx
const ProductListOne = {
  url: 'https://jsonblob.com/api/jsonBlob/bc938c99-cf7d-11eb-a671-3b544f13a561',
};

const ProductListTwo = {
  url: 'https://jsonblob.com/api/jsonBlob/8020f261-cf9d-11eb-a671-9ba03453d647',
};

const ProductListThree = {
  url: 'https://jsonblob.com/api/jsonBlob/24c64a47-cf9a-11eb-a671-a391734c1497',
};

// CartList Api - to be used in Cart.tsx
const CartListOne = {
  url: 'https://jsonblob.com/api/jsonBlob/b5e57bc9-cf9e-11eb-a671-8b3a1cc0f833',
};

const CartListTwo = {
  url: 'https://jsonblob.com/api/jsonBlob/f03b44b9-cf88-11eb-a671-071efb31ebe6',
};

const CartListThree = {
  url: 'https://jsonblob.com/api/jsonBlob/2291015a-cf9f-11eb-a671-d3bee8f663e1',
};

let endpoints = {
  ProductListOne,
  ProductListTwo,
  ProductListThree,
  CartListOne,
  CartListTwo,
  CartListThree,
};

export default endpoints;
