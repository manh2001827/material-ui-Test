import { makeStyles } from "@material-ui/core";
import img1 from './img/1.png'
import img2 from './img/2.png'
const styleFooter = makeStyles((theme) => ({
    footer:{
        maxWidth:960,
        margin:"0 auto",
        
    },
    footerContent:{
        display:"flex",
        width:"100%",
        justifyContent: "space-around",
        marginTop:30
    },
    footerContentImg:{
        width:"100%",
        height:"100%",
        
    },
    footerContentImgBelow:{
        position: "relative",
        maxWidth: 300,
        margin:" 0 auto 40px",
       
        transform: "translateX(-5%)"
    },
    footerImg1:{   
            backgroundImage: `url(${img1})`,
            paddingBottom: 149,
            width: "100%",
            backgroundSize: "contain",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat"
        
    },
    footerImg2:{
        
            backgroundImage: `url(${img2})`,
            paddingBottom: "100%",
            width: "100%",
            backgroundSize: "contain",
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
            position: "relative",
            zIndex: -1
    },
    footerImg2Clone:{
        backgroundImage: `url(${img2})`,
        transform: "scale(.8)",
        position: "absolute",
        right: "-20%",
        top: "15%",
        width: "100%",
        paddingBottom: "100%",
        backgroundSize: "contain",
        backgroundPosition: "50%",
        backgroundRepeat:" no-repeat",
        zIndex: -1,
    },
    infomationBox:{
        borderRadius: 5,
        boxShadow: "5px 10px 20px rgb(0 0 0 / 40%)",
        backgroundColor: "rgba(0,0,0,.82)",
        padding:"50px 40px",
        height: 450,
        maxWidth: 320,
    },
    infomationBoxTitle:{
        color:"white",
        fontWeight:"bolder",
        marginBottom:10,
        fontStyle:"italic",
        maxWidth: 170,
        margin: "0 auto 30px auto"
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

export default styleFooter