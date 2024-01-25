import React from 'react';
import Product from '../src/shared/components/Product';
import Cart from '../src/shared/components/Cart';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  productsContainer: {
    width: '70%',
  },
  cartContainer: {
    width: '25%',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.productsContainer}>
        <h1>Shopping Cart</h1>
        <Product
          product={{
            id: 1,
            name: 'Product 1',
            price: 10,
          }}
        />
        <Product
          product={{
            id: 2,
            name: 'Product 2',
            price: 20,
          }}
        />
      </div>
      <div className={classes.cartContainer}>
        <Cart />
      </div>
    </Container>
  );
};

export default App;
