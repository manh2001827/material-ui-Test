import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import img0 from './img/0.jpg'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'


const AutoPlaySwipeableViews = (SwipeableViews);

const tutorialSteps = [
  {
    imgPath:img1
  },
  {
    imgPath:img2
  },{
    imgPath:img3
  },{
    imgPath:img4
  },{
    imgPath:img5
  },
  {
    imgPath:img6
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 480,
    flexGrow: 1,
    display:"none",
    [theme.breakpoints.down('xs')]: {
            display:"block"
    },
    
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: "transparent"
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 480,
    overflow: 'hidden',
    width: '105%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </div>
  );
}

export default SwipeableTextMobileStepper;
