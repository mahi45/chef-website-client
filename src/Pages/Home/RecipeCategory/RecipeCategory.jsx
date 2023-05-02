import React from "react";
import { Card, Image } from "react-bootstrap";

const RecipeCategory = ({ category }) => {
  const { name, recipe_image } = category;
  return (
    <div>
      <div className="d-flex align-items-center">
        <Card
          className="rounded-circle shadow-lg mb-4"
          style={{ width: "300px", height: "300px", overflow: "hidden" }}
        >
          <Image src={recipe_image} className="w-100 h-100 object-fit-cover" />
          <Card.Body
            className="d-flex flex-column align-items-center pt-0"
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <h3 className="text-light">{name}</h3>
            <p className="text-light">Some description text</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default RecipeCategory;
