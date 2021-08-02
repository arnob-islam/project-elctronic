import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import TittleThumb from '../sub_pages/TittleThumb';
import { UseContextGlobally } from './contex';
import Loading from './Loading';
import SingleProduct from './SingleProduct';



const SingleDetails = () => {
    const { SHOW_ONLY_SINGLE_ITEM, ADD_TO_CART_FROM_SINGLE_DETAILS, INCREACE_DETAILS_ITEM_SINGLE, DECREASE_DETAILS_ITEM_SINGLE, dislayLoading, singleItem, productItems } = UseContextGlobally()

    const RandomProducts = productItems.sort(() => Math.random() - 0.5).slice(20, 30)

    const DivTitle = 'related products'

    const { id } = useParams()
    useEffect(() => {
     
        if(id){
            SHOW_ONLY_SINGLE_ITEM(id)
        }
    }, [dislayLoading, id, SHOW_ONLY_SINGLE_ITEM])

    useEffect(() => {
        singleItem.map(e => {
            return document.title = e.name.toUpperCase()
        })
    }, [singleItem])


    if (dislayLoading) {
        return <Loading />
    }





    return (
        <>
            <section className='sector__watch__single '>
                <TittleThumb props={'products'} />
                <div className="container">
                    <div className="row">
                        {singleItem.map(item => {
                            const { id, image_url, name, price, former_price, amount, description, brand, country_origin, warranty } = item

                            return (
                                <div className="single__view__body" key={id}>
                                    <div className="single_view_wrapper" >
                                        <div className="photos_container">
                                            <img src={image_url} className='img-fluid' alt="" />
                                        </div>
                                        <div className="single_view_details">
                                            <div className="single_view_name">
                                                <h5>  {name}</h5>
                                            </div>
                                            <div className="single_products_brand">
                                                Brand: <Link to={`/products/catagory/brands/${brand}`}>{brand}</Link>
                                            </div>
                                            <div className="single_price">
                                                <h5>$ {price} </h5>
                                                <del>$ {former_price}</del>
                                            </div>
                                            <div className="single_button_container">

                                                <div className="single_qty">
                                                    <span>Quantity</span>

                                                    <div className="__qty_button_container">
                                                        <button className=' __singleBts' onClick={() => INCREACE_DETAILS_ITEM_SINGLE(id)}> + </button>
                                                        {amount}
                                                        <button className=' __singleBts' onClick={() => DECREASE_DETAILS_ITEM_SINGLE(id)}>-</button>
                                                    </div>

                                                </div>

                                                <div className="bye_now add_to_cart_from_details">

                                                    <Link to={`/products/chakout/${id}`} className='btn btn-secondary me-3'>Bye now</Link>

                                                    <button className='cart_add_btn btn __singleBts' onClick={() => ADD_TO_CART_FROM_SINGLE_DETAILS(id)}>
                                                        add to cart
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="single__view__description">
                                        <div className="description_container">
                                            <div className="single_details">
                                                <h4>
                                                    {name}
                                                </h4>
                                                <p> {description}</p>
                                            </div>
                                            <div className="single_overview">
                                                <ul>
                                                    <li className='single_overview_details'>
                                                        <span>
                                                            warranty
                                                        </span>
                                                        <span> {warranty > 5 ? warranty + ' month' : warranty + ' year'} </span>
                                                    </li>

                                                </ul>
                                                <span>Made in {country_origin} </span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="rating__container">
                                        {/* <RatingWidget /> */}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className='product__sector single_view_related_products'>
                <SingleProduct SpacificProducts={RandomProducts} DivTitle={DivTitle} />
            </section>
        </>
    )
}

export default SingleDetails
