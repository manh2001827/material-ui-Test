import { makeStyles   } from "@material-ui/core";
import  img from '../header/img/1.png'
const styleHeader = makeStyles((theme)=>({
    header:{
        backgroundImage: `url(${img})`,
        height: 500,
        backgroundRepeat:"no-repeat",
        position:"relative",
        width:"100%",
        backgroundSize:"cover",
        backgroundPosition: "50%",
        transition: "all .5s ease-in-out",
        [theme.breakpoints.down('sm')]: {
            
            height:300
        }
    },
    headerContainer:{
        position:"absolute",
        left:" 10%",
        maxWidth:350,
        background: "rgba(36,48,56,.5)",
        padding:30,
        [theme.breakpoints.down('sm')]: {
            padding:15,
            width:160,
            
        }
    },
    headerTitle:{
        width: 120,
        fontSize: 54,
        color:"#fff",
        [theme.breakpoints.down('sm')]: {
            width:70,
            fontSize:26
        }
    },
    headerDescription:{
        fontSize:22,
        fontWeight: 300,
        color: "#fff",
        opacity: .8,
        [theme.breakpoints.down('sm')]: {
            marginTop:10,
            fontSize:14
        }
    }
}))

export default styleHeader;