import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar'
import Error from './pages/404';
import Footer from './pages/Footer';

import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popular from './sub_pages/Popular';
import ProductsOfTheMonth from './sub_pages/ProductsOfTheMonth';
import Mobile from './sub_pages/Mobile';
import Laptops from './sub_pages/Laptops';
import ComputerAccosories from './sub_pages/ComputerAccosories';
import Recomanded from './sub_pages/Recomanded';
import Brands from './sub_pages/Brands';
import BrandSingle from './sub_pages/BrandSingle';
import Camara from './sub_pages/Camara';


import CartList from './components/CartList';
import WishList from './components/WishList';
import SingleDetails from './components/SingleDetails';
import CheckoutByCart from './components/Checkout/CheckoutByCart';
import CheckoutBySingle from './components/Checkout/CheckoutBySingle';
import ConfirmCheckout from './components/Checkout/ConfirmCheckout';
import './pages/index.css';

import LoginForm from './components/UserLogin/LoginForm';
import SignUp from './components/UserLogin/SignUp';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/all/popular/products/'>
          <Popular />
        </Route>

        <Route path='/all/products/of/months'>
          <ProductsOfTheMonth />
        </Route>

        <Route path='/products/catagory/mobile'>
          <Mobile />
        </Route>

        <Route path='/products/catagory/accesories/laptop'>
          <Laptops />
        </Route>

        <Route path='/products/catagory/ComputerAccosories/'>
          <ComputerAccosories />
        </Route>
        <Route path='/products/catagory/recomanded/'>
          <Recomanded />
        </Route>


        <Route path='/products/catagory/Camara/all'>
          <Camara />
        </Route>


        <Route path='/catagory/brands/'>
          <Brands />
        </Route>

        <Route path='/view/cartlist/'>
          <CartList />
        </Route>
        <Route path='/view/wishlist/'>
          <WishList />
        </Route>


        <Route path='/user/login/signup/'>
          <LoginForm />
        </Route>

        <Route path='/create/account/new/user'>
          <SignUp />
        </Route>

        <Route path='/single/product/:id' children={<SingleDetails />}>
        </Route>

        <Route path='/products/catagory/brands/:brand' children={<BrandSingle />}>
        </Route>

        <Route path='/products/chakout/:id' children={<CheckoutBySingle />}>
        </Route>
        <Route path='/checkout/by/cart/' children={<CheckoutByCart />}>
        </Route>
        <Route path='/checkout/confirm/user/' children={<ConfirmCheckout />}>
        </Route>

        <Route path='*' >
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
