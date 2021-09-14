import { makeStyles } from "@material-ui/core";

const styleStep = makeStyles((theme)=>({
    step:{
        margin:"0 auto",
        maxWidth: 920,
        width:"100%",
        
    },
    stepContainer:{
        justifyContent:"space-around",
        [theme.breakpoints.down('sm')]: {
            display:"none"
          },
    },
    stepContainerHeader:{
        maxWidth:600,
        width:"100%",
        margin:"0 auto"
    },
    stepContainerItem:{
        width:"30%",
        margin:10,
        borderRadius:"4%",
        boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        '&:hover': {
            transform:" scaleY(1.02)"
         },

    },
    stepContainerItemImg:{
        width:"100%",
        height:280,
        borderRadius:"4% 4% 0 0",
        objectFit:"cover"
    },
    stepContainerItemTitle:{
        margin:"20px 0",
        textAlign:"center",
        fontStyle:'italic',
        fontWeight:500
    },
    stepContainerItemDescri:{
        padding:"0 20px 40px 20px",
        textAlign:"center",
        fontSize:22
    },
    stepVideo:{
        maxWidth:600,
        width:"100%",
        margin:"40px auto"
    }
}))

export default styleStep