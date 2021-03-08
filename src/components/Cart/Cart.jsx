import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles'
import CartItem from './cartItem/CartItem'
import { Link } from 'react-router-dom'


const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromcart, handleEmptyCart }) => {

    const classes = useStyles();
    const Emptycard = () => (
        <Typography variant="subtitle1"> you have no items in your shopping cart
            <Link to='/' className={classes.link}> Start adding some!</Link></Typography>

    );
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromcart={handleRemoveFromcart} />

                    </Grid>

                ))}

            </Grid>
            <div className={classes.CardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Empty cart</Button>
                    <Button component={Link} to='/checkout' className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>

                </div>

            </div>
        </>
    )
    if (!cart.line_items) return 'loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <Emptycard /> : <FilledCart />}

        </Container>
    )
}

export default Cart;
