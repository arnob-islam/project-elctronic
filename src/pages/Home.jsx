import React, { useEffect } from "react";
import Banner from "./hero_banner";
import "./index.css";

import { UseContextGlobally } from "../components/contex";
import Loading from "../components/Loading";
import Advertisment from "../components/Advertisment";
import ProductOfTheMonth from "./Product_of_the_month";
import PopularProducts from './PopularProducts';
import Recomanded from './Recomanded';

// Advertisment image
const imageOne = "image/phoneBranding.jfif";
const imageTwo = "image/computerBranding.jfif";

const LinkOne = '/products/catagory/mobile'
const LinkTwo = '/products/catagory/accesories/laptop'



// Advertisment image
const imageThree = "image/cameraBranding.jfif";
const imageFour = "image/computerBranding.jfif";

const LinkThree = '/products/catagory/Camara/all'
const LinkFour = '/products/catagory/accesories/laptop'

const Home = () => {
  const { dislayLoading } = UseContextGlobally();

  useEffect(() => {
    document.title = 'Mr Electronics'
  }, [])


  if (dislayLoading) {
    return <Loading />;
  }



  return (
    <>
      <Banner />
      <Advertisment props={{ imageOne, imageTwo, LinkOne, LinkTwo }} />
      <ProductOfTheMonth />
      <PopularProducts />

      <Advertisment props={{ imageOne: imageThree, imageTwo: imageFour, LinkOne: LinkThree, LinkTwo: LinkFour }} />
      <Recomanded />
    </>
  );
};

export default Home;
