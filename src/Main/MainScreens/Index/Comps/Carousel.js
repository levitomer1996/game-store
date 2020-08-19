import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { makeStyles } from "@material-ui/core/styles";

const IndexCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className={("d-block w-100", classes.img)}
            src="http://media.rockstargames.com/rockstargames/img/global/news/upload/3_gtavpc_03272015.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Grand Theft Auto V 50% OFF</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={("d-block w-100", classes.img)}
            src="https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/wallpapers/games/rdr2_naturalist_desktop.jpg"
            alt="Red dead redemption 2"
          />
          <Carousel.Caption>
            <h3>Red Dead Redemption 2 The Naturalist</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  img: {
    width: "90%",
    [theme.breakpoints.down("sm")]: { width: "100%", height: "500px" },
    [theme.breakpoints.up("lg")]: { height: "500px", width: "100%" },
  },
}));
export default IndexCarousel;
