import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();

theme.typography.h6 = { // customize cho the p 
    fontFamily: "Raleway",
    paddingLeft: 30,
    fontSize: 22,
    //color:"#3c5466",
    color:"red"
  }

theme.typography.h3 ={ // customize cho the header lon 

    '@media (min-width:600px)': {
        fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: 44,
    fontStyle: "oblique",
    color: "#3c5466",
      },
    
    
}
theme.typography.h5 ={ //customize cho the header be
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: 33,
    fontStyle: "oblique",
    color: "#3c5466"
}

export default theme