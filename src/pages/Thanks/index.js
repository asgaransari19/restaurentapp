import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100px',
        width: '250px',
        border: '1px solid',
        borderRadius: '20px',
        // alignItems: 'center',
        margin: '100px auto auto auto',
        // background: "#87ceeb",
        boxShadow: '2px 2px 20px ',
        textAlign: "center",
        "&:hover": {
            boxShadow: '2px 3px 20px blue'
        }


    },
    title: {
        fontSize: '1.5rem',

    },
    btn: {
        marginTop: '40px',
        borderRadius: '10px',
        boxShadow: '2px 3px 20px blue',
        border: '2px solid black'

    }
}))

function Thanks() {
    const classes = useStyles();
    const history = useHistory()
    const handleChange = () => {
        history.push("/welcomepage")
    }

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>
                ✍️..your order <hr /> <b>😍submit😍</b>
            </Typography>
            <Button onClick={handleChange} className={classes.btn} variant="outlined">👈<HomeIcon /></Button><br />
            <small>Click on button go to home </small>
        </div>
    )
}

export default Thanks;
