import { makeStyles } from "@material-ui/core";
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
const styleSection = makeStyles((theme)=>({
    section:{
        position:"relative",
        
    },
    sectionImg:{
        position:"absolute",
        right:0,
        top:-20,
        [theme.breakpoints.down('sm')]: {
            opacity:0.4,
            
          },
    },
    sectionContent:{
        maxWidth: 920,
        margin:"0 auto",
        width:"100%",
        color: "#3c5466",
        [theme.breakpoints.down('sm')]: {
            margin:'0 auto'
          },
    },
    ContentHeading:{
        fontWeight: 700,
        fontSize: 42 ,
        fontStyle:'italic',
        margin:'20px auto',
        [theme.breakpoints.down('xs')]: {
            fontSize: 30 ,
            maxWidth:350
        },
    },
    ContentHeadingSpan:{
        display:'block',
        float:'right',
        [theme.breakpoints.down('xs')]: {
            display:"inline",
            float:"none"
        },
    },
    ContentBody:{
        
        
    },
    ContentBodyImg:{
        
        padding:"0 30px 0 0",
        margin:20,
        filter: "brightness(1.1)",
        [theme.breakpoints.down('sm')]: {
            width:"100%",
            height:"100%"
          },
        [theme.breakpoints.down('xs')]: {
            display:"none"
          },
    },
    ContentBodyTitle:{
        padding:20,
        margin:"auto",
        
    },
    
    ContentBodyTitleHeading:{
        fontStyle:'italic',
        fontWeight:"bolder",
        [theme.breakpoints.down('xs')]: {
            fontSize: 28,
          },
    },
    ContentBodyTitleDescri:{
        marginTop:10,
        fontWeight:200,
        fontSize: 22,
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
          },
    },

    ContentBodyTitleImg:{
        [theme.breakpoints.down('xs')]: {
        margin:"0 auto",
        maxWidth:320,
        }
    },

    ContentBodyTitleImg1:{
        backgroundPosition: "50%",
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${img1})`,
            width:"100%",
            height:320,
            backgroundRepeat:"no-repeat",
            filter: "brightness(1.1)",
            backgroundPosition: "50%"
        },
    },
    ContentBodyTitleImg2:{
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${img2})`,
            height:320,
            width:"100%",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            filter: "brightness(1.1)",
            backgroundPosition: "50%"
        },
    },
    ContentBodyTitleImg3:{
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${img3})`,
            width:"100%",
            height:320,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            filter: "brightness(1.1)",
            backgroundPosition: "50%"
        },
    },
    ContentBodyTitleImg4:{
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${img4})`,
            width:"100%",
            height:320,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            filter: "brightness(1.1)",
            backgroundPosition: "50%"
        },
    },
    ContentBodyTitleImg5:{
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${img5})`,
            width:"100%",
            height:320,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            filter: "brightness(1.1)",
            backgroundPosition: "50%"
        },
    },
}))

export default styleSection