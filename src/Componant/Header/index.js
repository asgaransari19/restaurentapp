import React, { useContext } from 'react'
import { createContext } from "react";
import { makeStyles, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useHistory } from 'react-router';
import pagePaths from '../../utils/constant'


const useStyles = makeStyles((theme) => ({

    menuButton: {
        marginLeft: '15px'
    },
    addCarticon: {
        // color: 'white',
        marginLeft: 'auto'
    }
}));



function Header(props) {
    const classes = useStyles();
    const history = useHistory();

    const { cartItems } = props
    let totalQuantity = 0;
    cartItems.forEach((i) => {
        totalQuantity += i.quantity;
    });


    const placeOrder = () => {
        history.push("/thanks")
    }
    console.log("=======>", cartItems)

    return (
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <IconButton edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu">
                    <RestaurantIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Food's Restaurant
                </Typography>
                {totalQuantity > 0 && <Badge color="secondary" badgeContent={totalQuantity} className={classes.addCarticon} onClick={placeOrder} >
                    <AddShoppingCartIcon />
                </Badge>}
            </Toolbar>
        </AppBar>
    )
}

export default Header;
