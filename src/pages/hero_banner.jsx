import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const Hero_banner = () => {
  return (
    <>
      <section className="hero__banner">
        <div className="carousel__wrapper">
          <OwlCarousel
            className="owl-theme align-items-center text-center carousel__body"
            items={1}
            loop
            nav

          >
            <div
              className="item"
              style={{
                background:
                  `linear-gradient(90deg, rgba(0, 208, 132, 0.2) 0%, rgba(50, 222, 212, 0.2) 100%)`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="d-none d-sm-none d-md-block">
                      <img
                        src="image/alexa.png"
                        className="img-fluid"
                        alt="headphoneone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4>latest collection </h4>
                    <h2>With best price</h2>
                    <Link to="/catagory/brands/" className="btn mt-4 btn-outline-primary">
                      View catagory
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <img
                      src="image/camara1.png"
                      className="img-fluid"
                      alt="camara"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{
                background:
                  `linear-gradient(90deg, rgba(255, 105, 0, 0.2) 0%, rgba(50, 222, 212, 0.2) 100%)`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="d-none d-sm-none d-md-block">
                      <img
                        src="image/applewatch.png"
                        className="img-fluid"
                        alt="applewatch"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4>Customar choice </h4>
                    <h2>Excellent offers</h2>
                    <Link to="/catagory/brands/" className="btn mt-4 btn-outline-primary">
                      View catagory
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <img
                      src="image/headphoneone.png"
                      className="img-fluid"
                      alt="headphone "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{
                background:
                  `linear-gradient(90deg, rgba(0, 43, 220, 0.2) 0%, rgba(50, 222, 212, 0.2) 100%)`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="d-none d-sm-none d-md-block">
                      <img
                        src="image/headphonetwo.png"
                        className="img-fluid"
                        alt="headphone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4>international collection </h4>
                    <h2>With honest price</h2>
                    <Link to="/catagory/brands/" className="btn mt-4 btn-outline-primary">
                      View catagory
                    </Link>
                  </div>
                  <div className="col-md-3">
                    <img
                      src="image/camara1.png"
                      className="img-fluid"
                      alt="headphoneone"
                    />
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Hero_banner;
