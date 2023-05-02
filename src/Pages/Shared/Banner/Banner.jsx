import React from "react";
import BannerImg from "../../../assets/BannerImage.jpg";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        width: "100%",
        height: "500px",
      }}
    >
      <div className="banner-text">
        <h2 className="banner-heading">Choose from thousands of recipes</h2>
        <p>
          Appropriately integrate technically sound value with scalable
          infomediaries negotiate sustainable strategic theme areas
        </p>
        <Button variant="primary">See All Recipe</Button>
      </div>
    </div>
  );
};

export default Banner;
