import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card, Col, Row, Container } from "react-bootstrap";

const ChefDetais = () => {
  const chefs = useLoaderData();

  const {
    chef_name,
    chef_image,
    years_of_experience,
    no_of_recipes,
    likes,
    description,
  } = chefs;

  return (
    <Container>
      <Row>
        <Col lg={4}>
          <img src={chef_image} alt="" width={400} />
        </Col>
        <Col lg={8} className="py-5">
          <h2>Name:{chef_name}</h2>
          <p>
            <span>
              <b>Description:</b> {description}
            </span>
          </p>
          <p>
            <span>
              <b>Number of Recipe: </b>
              {no_of_recipes}
            </span>
          </p>
          <p>
            <span>
              <b>Years of Experience: </b>
              {years_of_experience}
            </span>
          </p>
          <p>
            <span>
              <b>Likes: </b>
              {likes}
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ChefDetais;
