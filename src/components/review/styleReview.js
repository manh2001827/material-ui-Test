import { makeStyles } from "@material-ui/core";
import img1 from './img/1.jpg'

const styleReview=makeStyles((theme)=>({
    review:{
        backgroundImage:`url(${img1})`,
        margin:"40px 0 170px 0",
        backgroundRepeat: "no-repeat",
        backgroundSize:" cover",
        height:340,
        backgroundPosition: "50%",
        position:"relative",
        [theme.breakpoints.down('sm')]: {
            height:700
        }
    },
    reviewContent:{
        display:"flex",
        flexWrap: "wrap",
        maxWidth: 960,
       
        margin:0,
        [theme.breakpoints.up('sm')]: {
            position:"absolute",
        top:"100%", 
        left:"50%",
        transform: "translate(-50%,-50%)",
        justifyContent:"space-around",
        
          },
    },
    reviewContentVideo:{
        width:"100%",
        height:150,
        marginBottom:20,
        [theme.breakpoints.down('xs')]: {
            height:250,
            transform:" translateY(0%)"
        }
    },
    bigVideo:{
        height:"170%",
        transform:" translateY(-25%)",
        [theme.breakpoints.down('sm')]: {
            height:"100%",
            transform:" translateY(0%)"
        }
    }
}))

export default styleReview