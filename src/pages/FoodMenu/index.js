import { createContext, useState } from "react";
import React from "react";
import Header from '../../Componant/Header';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Card, Box, IconButton, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const items = [
    {
        name: "burger",
        image: "/image/burger.jpg",
        price: '100',
    },
    {
        name: "pizza",
        image: "/image/pizza.jpg",
        price: '150',
    },
    {
        name: "RedBull",
        image: "/image/redbull.jpg",
        price: '120',

    },
    {
        name: "samosa",
        image: "/image/samosa.png",
        price: '20',
    },
    {
        name: "biryani",
        image: "/image/biryani.jpg",
        price: '200',

    },
    {
        name: "fruitsalad",
        image: "/image/fruitsalad.jpg",
        price: '20',
    },

]

const useStyles = makeStyles(theme => ({
    grid: {
        margin: '64px 0 0 0',
        padding: 0,
        width: '100%',
        // border: '1px solid',
        display: 'flex',
        justifyContent: 'space-around'
    },

    card: {
        marginTop: '10px',
        height: '350px',
        width: '250px',
        // border: '1px solid',

    },
    media: {
        height: '220px',
        width: '250px',
        margin: 'auto auto auto auto'
    },
    btns: {
        // border: '1px solid',
        width: '150px',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px'
    }

}));


export default function FoodMenu(props) {
    const classes = useStyles();
    const [cartItems, setCartItems] = useState([])

    const add = (obj) => {
        const newData = { ...obj, quantity: 1 }
        let isDataFound = false;
        const filterData = cartItems.map((d) => {
            if (d.name === obj.name) {
                d.quantity += 1;
                isDataFound = true;
            }
            return d;
        });
        if (isDataFound) {
            setCartItems(filterData)
        } else setCartItems([...cartItems, newData])
    };

    const remove = (obj) => {
        const filterData = cartItems.map((d) => {
            if (d.name === obj.name) {
                if (d.quantity > 1) {
                    d.quantity -= 1;
                    return d;
                } else if (d.quantity === 1) {
                    return d;
                }
                return (null);
            }
            else {
                return d;
            }
        })
        setCartItems(filterData)
    }
    // console.log(cartItems);


    return (
        <div>
            <Header cartItems={cartItems} />
            <Grid container className={classes.grid}>
                {
                    items.map((obj) => {
                        return (
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={obj.image} />

                                <Typography gutterBottom variant="h5" component="h2">
                                    {obj.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" >
                                    Price:  {obj.price}
                                </Typography>

                                <Box className={classes.btns}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => add(obj)}
                                    ><AddIcon /></Button>
                                    <Button
                                        size="small"
                                        onClick={() => remove(obj)}
                                        variant="contained"><RemoveIcon /></Button>
                                </Box>
                            </Card>
                        )
                    })
                }


            </Grid>

        </div >

    )
}


