import React from "react";
import sectionImg from "../../../assets/section_bg_image.jpg";
import { Button, Container } from "react-bootstrap";

const Message = () => {
  return (
    <Container className="message-background">
      <div className="section-text">
        <p>Message From Founder</p>
        <h2 className="section-heading">
          First, we eat. Then, we do everything else.
        </h2>
        <p>
          Consectetur quisque per vel ac aptent praesent convallis aliquam
          montes. Lectus sit inceptos dis dui mattis ad morbi leo luctus duis.
          Mauris neque dictumst letius consequat senectus potenti ad.
        </p>
        <Button variant="primary">See All Recipe</Button>
      </div>
    </Container>
  );
};

export default Message;
