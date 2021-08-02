import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UseContextGlobally } from './contex';



import '../pages/index.css'
import Gridthree from './svg/Gridthree';
import Bag from './svg/Bag';
import Hart from './svg/Hart';
import Cross from './svg/Cross';
import User from './svg/User';
import Check from './svg/Check';

const Navbar = () => {

    const { cartItem, wishItem, productItems } = UseContextGlobally()



    const [slider, setSlider] = React.useState(false)


    const [SearchValue, setInputValue] = React.useState('')
    const [SearchProdutc, setSearchProdutcs] = React.useState(productItems)



    const input__fild = React.useRef()

    const HandeSubmitInput = () => {
        setInputValue(input__fild.current.value)
    }
    useEffect(() => {
        if (SearchValue) {
            const produchSercth = (searchValue, Products) => {
                return Products.filter(e => {
                    const regex = new RegExp(searchValue, 'gi')
                    return e.catagory.match(regex) || e.name.match(regex) || e.sub_catagory.match(regex) || e.brand.match(regex)
                })
            }
            return setSearchProdutcs(produchSercth(SearchValue, productItems))
        }
        else {
            setSearchProdutcs([])
        }

    }, [SearchValue, productItems])

    function GetInformation() {
        return localStorage.getItem('USER') ? JSON.parse(localStorage.getItem('USER')) : []
    }

    const IsUserIsTrue = GetInformation()






    if (SearchProdutc.length > 12) {
        setSearchProdutcs(SearchProdutc.map(e => e).slice(0, 12))
    }



    return (
        <div>
            <div className="head-carryer">
                <header className="py-3 fixed__header">
                    <div className="container-xl d-grid gap-3 align-items-center" style={{ gridTemplateColumns: "50px 2fr" }}>
                        <div className="">
                            <Link to='/' className="d-flex align-items-center mb-2 mb-lg-0 link-dark text-decoration-none " id="dropdownNavLink" aria-expanded="false">
                                <img src={"image/slack.png" || "image/slack.png"} alt="logo" />
                            </Link>
                        </div>

                        <div className="d-flex align-items-center justify-content-between">
                            <div className="form_container col-lg-5 col-md-4 col-7 me-3">
                                <form className="" onSubmit={(e) => e.preventDefault()}>
                                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search" onChange={HandeSubmitInput} ref={input__fild} />
                                </form>
                                <ul className='search__products__value'>
                                    {SearchProdutc.map(e => {
                                        return (
                                            <li onClick={() => setSearchProdutcs([])} key={e.id}><Link to={`/single/product/${e.id}`}> {e.name} </Link></li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="d-flex carts-body pe-2">
                                <div className="position-relative">

                                    <Link to='/view/cartlist/'>
                                        <button>
                                            <Bag />
                                        </button>
                                    </Link>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                        {cartItem.length > 0 ? `${cartItem.length}` : ''}

                                    </span>
                                </div>

                                <div className="position-relative">
                                    <Link to='/view/wishlist/' >
                                        <button>
                                            <Hart />
                                        </button>
                                    </Link>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                        {wishItem.length > 0 && `${wishItem.length}`}
                                    </span>
                                </div>
                                <div className="user_Link_btn">
                                    <Link to='/user/login/signup/'>
                                        <button className='user_btn'> <User /> </button>
                                    </Link>
                                </div>

                                <button className='mobile_toggle_btn' onClick={() => setSlider(!slider)}>
                                    <Gridthree />
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ************* Navbar of the Header *********** */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light only_bigscreen fixed__header" aria-label="Tenth navbar example">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/'>all shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/all/popular/products/'>popular</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to='/all/products/of/months' aria-disabled="true">product of month</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to='/products/catagory/recomanded/' aria-disabled="true">Recomanded </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to='/' id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Catagory</Link>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown08">
                                        <li><Link className="dropdown-item" to='/products/catagory/mobile'>mobile</Link></li>
                                        <li><Link className="dropdown-item" to='/products/catagory/accesories/laptop'>Laptop product</Link></li>
                                        <li><Link className="dropdown-item" to='/products/catagory/ComputerAccosories/'>Computer accessories</Link></li>
                                        <li><Link className="dropdown-item" to='/products/catagory/Camara/all'>camara</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to='/catagory/brands/' className="nav-link link-dark">
                                        Brands
                                    </Link>
                                </li>
                                <li>
                                    <button className="nav-link link-dark contec__button" onClick={
                                        () => window.open('mailto:abcdefgh@gmail.com')
                                    }>
                                        contect us
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* *****Slider ***** */}

            <div className={slider ? "d-flex flex-column flex-shrink-0 p-3 bg-light slider__on _slide_" : "d-flex flex-column flex-shrink-0 p-3 bg-light _slide_ mobile_slider_off"} >
                <div className="d-flex mb-3 mb-md-0 justify-content-between __user_header">
                    <div className="user__info">
                        {IsUserIsTrue && IsUserIsTrue.length > 0 ?
                            <div className="branding_name">
                                <div className="user__svg">
                                    <User />
                                </div>
                                <div className="name_and_mail">
                                    <h4> {`${IsUserIsTrue[0].F_Name} ${IsUserIsTrue[0].L_Name}`} </h4>
                                    <Check />
                                </div>
                                <Link to='/user/login/signup/' className='_view_profile'>view profile</Link>
                            </div>
                            : <Link to='/user/login/signup/' className='btn btn-outline-danger to_login'>Login</Link>}
                    </div>
                    <div className="close__Slider">
                        <button className='close-slider' onClick={() => setSlider(false)} >
                            <Cross />
                        </button>
                    </div>
                </div>

                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to='/' className="nav-link link-dark" >
                            all shop
                        </Link>
                    </li>
                    <li>
                        <Link to='/all/popular/products/' className="nav-link link-dark">
                            populer
                        </Link>
                    </li>
                    <li>
                        <Link to='/all/products/of/months' className="nav-link link-dark">
                            product of month
                        </Link>
                    </li>
                    <li>
                        <Link to='/products/catagory/recomanded/' className="nav-link link-dark">
                            Recomanded
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle link-dark" to='/' id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Catagory</Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdown08">
                            <li><Link className="dropdown-item" to='/products/catagory/mobile'>mobile</Link></li>
                            <li><Link className="dropdown-item" to='/products/catagory/accesories/laptop'>Laptop product</Link></li>

                            <li><Link className="dropdown-item" to='/products/catagory/ComputerAccosories/'>Computer accessories</Link></li>
                            <li><Link className="dropdown-item" to='/products/catagory/Camara/all'>camara</Link></li>

                        </ul>
                    </li>

                    <li>
                        <Link to='/catagory/brands/' className="nav-link link-dark">
                            Brands
                        </Link>
                    </li>
                    <li>
                        <button className="nav-link link-dark contec__button" onClick={
                            () => window.open('mailto:abcdefgh@gmail.com')
                        }>
                            contect us
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
