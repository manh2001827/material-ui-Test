import { makeStyles } from "@material-ui/core";

const styleSection = makeStyles((theme)=>({
    policy:{
        position:"relative",
       paddingBottom:40
    },
    policyContent:{
        maxWidth:960,
        margin:"0 auto",

    },
    policyContentHeading:{
        fontFamily: "Raleway",
    textAlign: "center",
    fontSize: 42,
    fontWeight: 700,
    color: "#3c5466"
    },
    policyContentCard:{
        display:'flex',
        marginLeft:20
    },
    policyContentCardDescri:{
        fontFamily: "Raleway",
    fontWeight: 400,
    fontSize: 22,
    color: "#3c5466",
    margin: "10px 0 0 35px"

    },
    policyInfo:{
        marginLeft:"45%",
        [theme.breakpoints.down('sm')]: {
            margin:20,
          },
    },
    
    policyInfoDescri:{
        
        fontFamily: "Raleway",
    fontWeight: 400,
    fontSize: 16,
    color: "#3c5466",
    lineHeight: 1.43,
    letterSpacing: "0.01071em"
    },
    policyImg:{
        position:"absolute",
        bottom:0,
        left:0,
        [theme.breakpoints.down('sm')]: {
            display:"none"
          },
    }
}))

export default styleSection