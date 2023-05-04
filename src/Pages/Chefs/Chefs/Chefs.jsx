import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Chefs = ({ chef }) => {
  const {
    chef_id,
    chef_image,
    chef_name,
    years_of_experience,
    no_of_recipes,
    likes,
  } = chef;
  return (
    <div>
      <Card className="mb-4">
        <Card.Img variant="top" src={chef_image} style={{ height: "400px" }} />
        <Card.Body className="chefs-content">
          <Card.Title>{chef_name}</Card.Title>
          <Card.Text>
            <p>Years of Experience: {years_of_experience}</p>
            <p>Numbers of Recipe: {no_of_recipes}</p>
            <p>Likes: {likes}</p>
          </Card.Text>
          <Link to={`/chefs/${chef_id}`}>
            <Button variant="primary">View Recipe</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Chefs;
