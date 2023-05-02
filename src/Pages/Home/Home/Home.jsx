import React, { useEffect, useState } from "react";
import Chefs from "../../Chefs/Chefs/Chefs";
import { Button, Col, Row } from "react-bootstrap";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h2 className="pt-3 pb-2 border-bottom">Chefs List</h2>
      <Row className="mt-4">
        {chefs.slice(0, showAll ? 9 : 6).map((chef) => (
          <Col xs={12} md={6} lg={4}>
            <Chefs key={chef.id} chef={chef}></Chefs>
          </Col>
        ))}
      </Row>
      <div className="d-flex mb-4">
        <Button
          className="mx-auto"
          variant="secondary"
          onClick={() => setShowAll(true)}
        >
          Show All Chefs
        </Button>
      </div>
    </div>
  );
};

export default Home;
