import React from "react";
import sectionImg from "../../../assets/section_bg_image.jpg";
import { Button, Container } from "react-bootstrap";

const Message = () => {
  return (
    <Container
      style={{
        backgroundImage: `url(${sectionImg})`,
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
    </Container>
  );
};

export default Message;
