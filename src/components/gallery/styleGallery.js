import { makeStyles } from "@material-ui/core";
import img0 from './img/0.jpg'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'

const styleSection = makeStyles((theme) => ({
    gallery: {
        backgroundImage: `url(${img0})`,
        backgroundAttachment: "fixed",
        backgroundSize: "auto",
        backgroundPosition: "50%",
        backgroundColor: "rgba(0,0,0,.5)",
        backgroundBlendMode: "overlay",
        position: "relative",
        height: 700,
        [theme.breakpoints.down('xs')]: {
            height: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
    },
    galleryBody:{
        maxWidth:960,
        margin:"0 auto",
        height:"100%",
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
    },
    galleryContent: {
        height: "100%",
        width:"100%",
        zIndex: 2,
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        flexDirection: "column",
        [theme.breakpoints.down('xs')]: {
            display:"none"
          },
    },
    galleryContentSmallImg: {
        height: "40%",
        width:"32%",
        padding: 20
    },
    galleryContentBigImg: {
        height: "60%",
        width:"32%",
        padding: 20
    },
    galleryContentImg1: {
        backgroundImage:`url(${img1})`,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 5,
        boxShadow: "2px 5px 20px rgb(0 0 0 / 30%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
    },
    galleryContentImg2: {
        backgroundImage:`url(${img2})`,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 5,
        boxShadow: "2px 5px 20px rgb(0 0 0 / 30%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
    },
    galleryContentImg3: {
        backgroundImage:`url(${img3})`,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 5,
        boxShadow: "2px 5px 20px rgb(0 0 0 / 30%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
    },
    galleryContentImg4: {
        backgroundImage:`url(${img4})`,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 5,
        boxShadow: "2px 5px 20px rgb(0 0 0 / 30%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
    },
    galleryContentImg5: {
        backgroundImage:`url(${img5})`,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 5,
        boxShadow: "2px 5px 20px rgb(0 0 0 / 30%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
    },
    galleryContentImg6: {
        backgroundImage:`url(${img6})`,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 5,
        boxShadow: "2px 5px 20px rgb(0 0 0 / 30%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
    },
    
}))

export default styleSection