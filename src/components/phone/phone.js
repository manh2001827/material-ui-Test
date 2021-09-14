import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    positionPhone:{
        position:"fixed",
        color:"white",
        backgroundColor:"#009906",
        borderRadius:"50%",
        left:20,
        bottom:20,
        zIndex:9999,
        height:56,
        width:56,
        border:"none",
        '&:hover': {
            backgroundColor:"green",
         },
    }
})

export default function Phone() {
    const classes = useStyles();

    return (
        <button className={classes.positionPhone}>
            <PhoneIcon />
        </button>
    )
}
