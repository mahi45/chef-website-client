import React, { useEffect, useState } from "react";
import Chefs from "../../Chefs/Chefs/Chefs";
import { Button, Col, Row } from "react-bootstrap";
import RecipeCategory from "../RecipeCategory/RecipeCategory";
import Message from "../Message/Message";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showAllChef, setShowAllChef] = useState(false);
  const [showAllCat, setShowAllCat] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* Chef Section Started */}
      <h2 className="pt-3 pb-2 border-bottom">Chefs List</h2>
      <Row className="mt-4">
        {chefs.slice(0, showAllChef ? 9 : 6).map((chef) => (
          <Col xs={12} md={6} lg={4}>
            <Chefs key={chef.id} chef={chef}></Chefs>
          </Col>
        ))}
      </Row>
      <div className="d-flex mb-4">
        <Button
          className="mx-auto"
          variant="secondary"
          onClick={() => setShowAllChef(true)}
        >
          Show All Chefs
        </Button>
      </div>
      {/* Chef section end */}
      {/* Popular Recipe category section Start */}
      <h2 className="pt-3 pb-2 border-bottom">Popular Categories</h2>
      <Row className="mt-4">
        {categories.map((category) => {
          <Col xs={12} md={6} lg={4}>
            <RecipeCategory
              key={category.id}
              category={category}
            ></RecipeCategory>
          </Col>;
        })}
      </Row>
      <Row className="mt-4">
        {categories.slice(0, showAllCat ? 9 : 6).map((category) => (
          <Col xs={12} md={6} lg={4}>
            <RecipeCategory
              key={category.id}
              category={category}
            ></RecipeCategory>
          </Col>
        ))}
      </Row>
      <div className="d-flex mb-4">
        <Button
          className="mx-auto"
          variant="secondary"
          onClick={() => setShowAllCat(true)}
        >
          Show All Category
        </Button>
      </div>
      {/* Popular Recipe category section End */}
      {/* Message Section Start */}
      <Message></Message>
      {/* Message Section Start */}
    </div>
  );
};

export default Home;
