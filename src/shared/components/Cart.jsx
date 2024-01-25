import React from 'react';
import { useCart } from '../context/CartContext';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cartItem: {
    marginBottom: 16,
    padding: 16,
    border: '1px solid #ddd',
    borderRadius: 8,
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
  removeButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#c82333',
    },
  },
  totalSection: {
    marginTop: 16,
    textAlign: 'center',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  totalAmount: {
    fontSize: 20,
    color: '#28a745',
  },
});

const Cart = () => {
  const { cart, removeFromCart, getCartTotal } = useCart();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h2" gutterBottom>
          Cart
        </Typography>
        <Grid container spacing={2}>
          {cart.map((product) => (
            <Grid item xs={12} key={product.id}>
              <div className={classes.cartItem}>
                <Typography variant="h3" className={classes.productName}>
                  {product.name}
                </Typography>
                <Typography variant="h4" className={classes.price}>
                  Price: ${product.price}
                </Typography>
                <Typography variant="body1" className={classes.quantity}>
                  Quantity: {product.quantity}
                </Typography>
                <Button
                  variant="contained"
                  className={classes.removeButton}
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove from Cart
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardContent className={classes.totalSection}>
        <Typography variant="h4" className={classes.totalLabel}>
          Total:
        </Typography>
        <Typography variant="h3" className={classes.totalAmount}>
          ${getCartTotal()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cart;
