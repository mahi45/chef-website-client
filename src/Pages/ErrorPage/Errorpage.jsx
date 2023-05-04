import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { Button } from "react-bootstrap";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="mx-auto text-center">
      <FaceFrownIcon className="icon text-danger" />
      <div>
        <h2>
          <span className="">Error</span>
          {status || 404}
        </h2>
        <p>{error?.message}</p>

        <Button variant="secondary">
          <Link to="/home" className="text-decoration-none text-white">
            Back to Star Chef
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ErrorPage;
