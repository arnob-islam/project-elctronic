import React from 'react'
import TittleThumb from '../sub_pages/TittleThumb';
import { Link } from 'react-router-dom'


import { UseContextGlobally } from './contex';
import Trash from './svg/Trash';

const ListSingle = ({ honesItem, DivTitle }) => {


    const { REMOVE_ITEM_FROM_CART, INCREACE_SINGLE_ITEM, DECREACE_SINGLE_ITEM, cartItem, total } = UseContextGlobally()



    return (

        <>
            <TittleThumb props={DivTitle} />
            <div className="container">
                <div className="row">
                    <div className="article-wrapper">
                        {honesItem.map(items => {
                            const { id, image_url, name, price, amount } = items

                            return (
                                <article key={id} >
                                    <div className="cart_product_image">
                                        <div className="img_conta">
                                            <img src={image_url} className='img-fluid' alt={name} />
                                        </div>
                                    </div>
                                    <div className='name-container'>
                                        <div className="name">
                                            <span>{name}</span>
                                        </div>
                                    </div>
                                    <div className="outer siunuwskw">
                                        <div className="price_button__">

                                            <div className="increment_decrement_container">
                                                <button onClick={() => INCREACE_SINGLE_ITEM(id)}> + </button>
                                                {amount}
                                                <button onClick={() => DECREACE_SINGLE_ITEM(id)}>-</button>
                                            </div>

                                        </div>
                                        <div className="total_and_delet d-flex flex-row">
                                            <div className="doller__sign">
                                                $
                                            </div>
                                            <div className="subtotal">
                                                {` ${price}`}
                                            </div>
                                            < div className="Delet__single__items __cart__button">
                                                <button onClick={() => REMOVE_ITEM_FROM_CART(id)}> <Trash /> </button>

                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>

                    <div className="chatk__out_sector">
                        <div className="total__cart__title">
                            <h4>cart total </h4>

                        </div>
                        <div className="cart__subtotal_title">
                            <h5> subtotal </h5>
                        </div>
                        <div className="cart_total_leng d-flex justify-content-between">
                            <span>Products </span>
                            <span>  {`${cartItem.length} items`} </span>
                        </div>
                        <div className="total__cart_price d-flex justify-content-between">
                            <span>total </span>
                            <span> {`$ ${total}`} </span>
                        </div>

                        <Link to={`/checkout/by/cart/`} className='btn btn-primary to_go_chakout mt-3'>chackout</Link>
                    </div>
                </div>
            </div></>

    )
}

export default ListSingle
