import { makeStyles } from "@material-ui/core";
import img1 from './img/1.png'
const styleOffer = makeStyles((theme)=>({
    offer:{
        background:`url(${img1})`,
        height:385,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "50%",
        backgroundBlendMode: "overlay",
        position:"relative",
    },
    infomationBox:{
        width:360,
        position:"absolute",
        top:20,
        right:"10%",
        backgroundColor: "rgba(80,47,22,.52)",
        padding:"30px 30px 40px 30px",
        borderRadius:7,
        [theme.breakpoints.down('xs')]: {
            width:"80%",
          },
    },
    infomationBoxTitle:{
        color:"white",
        fontWeight:"bolder",
        marginBottom:10
    },
    infomationBoxInput:{
        backgroundColor:"white",
        padding:10,
        width:"100%",
        borderRadius:5,
        marginBottom:20,
        border:"none"
    },
    infomationBoxSubmitButton:{
        marginTop:10,
        width:"100%",
        borderRadius:25,
        padding:"10px 20px",
        backgroundColor:"#707e2a",
        color:"white",
        '&:hover': {
            backgroundColor:"#707e2a",
         },
    }
}))

export default styleOffer