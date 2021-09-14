import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import { makeStyles } from "@material-ui/core";

export default function SimpleSlider() {
  const styleSection = makeStyles((theme) => ({
    center :{
      width: 300,
      margin: "0 auto",
      display:"none",
      [theme.breakpoints.down('xs')]: {
        display:"block"
      },
    }

  }))
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "30px",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  const classes = styleSection()
  return (
    <Slider {...settings} className={classes.center}>
      <div >
        <img src={img1} width={250} height={250} />
      </div>
      <div>
      <img src={img2} width={250} height={250} />
      </div>
      <div>
      <img src={img3} width={250} height={250} />
      </div>
      <div>
      <img src={img4} width={250} height={250} />
      </div>
      <div>
      <img src={img5} width={250} height={250} />
      </div>
      <div>
      <img src={img6} width={250} height={250} />
      </div>
    </Slider>
  );
}
