import { makeStyles } from "@material-ui/core";


const styleTager=makeStyles((theme)=>({
    target:{
        position:"relative"
    },
    targetImg:{
        position:"absolute",
        left:0,
        top:-40,
        transform: "scaleX(-1)",
        [theme.breakpoints.down('sm')]: {
            top:-40,
            opacity:0.4
          },
    },
    targetContent:{
        maxWidth:920,
        margin:"0 auto",
        [theme.breakpoints.down('sm')]: {
            margin:"0 20px"

          },
    },
    targetContentHeading:{
        fontStyle:'italic',
        margin:"40px auto",
        width:"100%",
        maxWidth:450,
        fontWeight:"bolder",
        color:"#3c5466",
        [theme.breakpoints.down('sm')]: {
            fontSize: 40,
            maxWidth:265,
            paddingTop:30
          },
    },
    targetContentBody:{
        color: "#3c5466",
        fontSize: 22,
        marginBottom:20,
        fontWeight:400,
        [theme.breakpoints.down('sm')]: {
            fontSize: 17,

          },
    }
    ,
    targetCard:{
        marginTop:30,
        justifyContent:"space-around"
    },
    targetCardImg:{
        width:"100%"
    },
    targetCardBody:{
        padding:20
    },
    targetCardTitle:{
        fontSize: 33,
        fontWeight: 700,
        marginBottom:20,
        color: "#3c5466",
        fontStyle:"italic"
    },
    targetCardDescri:{
        color: "#3c5466",
        fontSize: 22,
        fontWeight: 400,
    }
}))

export default styleTager