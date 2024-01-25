import React from 'react';
import { useCart } from '../context/CartContext';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    textAlign: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#007bff',
    marginBottom: 8,
  },
  quantity: {
    fontSize: 14,
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#218838',
    },
  },
});

const Product = ({ product }) => {
  const { addToCart } = useCart();
  const classes = useStyles();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Grid item xs={6}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="h2" className={classes.productName}>
            {product.name}
          </Typography>
          <Typography variant="h3" className={classes.price}>
            Price: ${product.price}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          className={classes.addToCartButton}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </Card>
    </Grid>
  );
};

export default Product;
