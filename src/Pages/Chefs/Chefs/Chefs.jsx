import React from "react";
import { Button, Card } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

const Chefs = ({ chef }) => {
  const { chef_image, chef_name, years_of_experience, no_of_recipes, likes } =
    chef;
  return (
    <div>
      <Card className="mb-4">
        <Card.Img variant="top" src={chef_image} />
        <Card.Body>
          <Card.Title>{chef_name}</Card.Title>
          <Card.Text>
            <p>Years of Experience: {years_of_experience}</p>
            <p>Numbers of Recipe: {no_of_recipes}</p>
            <p>Likes: {likes}</p>
          </Card.Text>
          <Button variant="primary">View Recipe</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Chefs;
