import React from 'react'
import { makeStyles, Button, AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import pagePaths from '../../utils/constant'
import Header from '../../Componant/Header';
const useStyles = makeStyles((theme) => ({

    box: {
        height: 'auto',
        width: '90%',
        // border: '1px solid',
        margin: '100px auto auto auto',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    },

    Typography: {
        // color: 'white',
        height: '150px',
        width: '50%',
        // border: '1px solid',
        textAlign: 'center',
        margin: 'auto auto auto auto',
        [theme.breakpoints.only('sm')]: {
            fontSize: '2.1rem',

            height: '100px',
            width: '50%',
            // border: '1px solid',
            margin: '50px auto auto auto',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.1rem',
            height: '100px',
            width: '100%',
            // border: '1px solid',
            margin: '50px auto auto auto',
        },
    },
    btn: {

        height: '40px',
        border: '1px solid black',
        // background: 'blue',
        // color: 'white',
        width: '150px',
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30px',
        boxShadow: '2px 2px 20px'

    },
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));



function WelcomePage() {
    const classes = useStyles();
    const history = useHistory()
    const handleClick = () => {
        history.push('/foodmenu')
    }

    return (

        <div className={classes.root}>

            <AppBar>
                <Toolbar className={classes.header}>
                    <Typography>welcome to Resturent Faimly</Typography>
                    <Typography>asgar</Typography>
                </Toolbar>
            </AppBar>

            <div className={classes.box}>
                <Typography className={classes.Typography} variant='h2'>Welcome to food's Kitchen</Typography>
                <Button className={classes.btn} onClick={handleClick}>Go to menu</Button>
            </div>
        </div>
    )
}

export default WelcomePage
