import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
const Advertisment = ({ props }) => {
  const { imageOne, imageTwo, LinkOne, LinkTwo } = props;

  return (
    <section className="advertisment_sector">
      <div className="container">
        <div className="row justify-content-center gap-4">
          <Link className="col-lg-5 col-md-8 col-sm-10 col-10" to={LinkOne}>
            <img src={imageOne} className="img-fluid" alt={imageOne} />
            <Button outline color="primary ads__btn">
              more
            </Button>
          </Link>
          <Link className="col-lg-5 col-md-8 col-sm-10 col-10" to={LinkTwo}>
            <img src={imageTwo} className="img-fluid" alt={imageTwo} />
            <Button outline color="primary ads__btn">
              more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Advertisment;
