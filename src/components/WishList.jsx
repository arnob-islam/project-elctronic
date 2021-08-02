import React from 'react'
import TittleThumb from '../sub_pages/TittleThumb';
import { UseContextGlobally } from './contex';
import Trash from './svg/Trash';
import Loading from './Loading';
import { Link } from 'react-router-dom'


const WishList = () => {

    const { wishItem, dislayLoading, REMOVE_ITEM_FROM_WISH_LIST } = UseContextGlobally()
    const tittle = 'Wish list'

    if (dislayLoading) {
        return <Loading />
    }

    if (wishItem.length < 1) {
        return (
            <section className='empty_cart empty_sfrgrwer'>
                <h5>
                    Your wish list is currently empty
                </h5>
            </section>
        )
    }
    return (
        <section className='view__wishList adw4swish'>
            <TittleThumb props={tittle} />
            <div className="container">
                <div className="row">
                    <div className="article-wrapper">
                        {wishItem.map(items => {
                            const { id, image_url, name, price } = items

                            return (
                                <article key={id} >
                                    <div className="img_container">
                                        <div className="cart_product_image">
                                            <img src={image_url} className='img-fluid' alt={name} />
                                        </div>
                                    </div>
                                    <div className="info-container">
                                        <div className='name-container '>
                                            <div className="name">
                                                <Link to={`/single/product/${id}`}>
                                                    <span>{name}</span>
                                                </Link>


                                            </div>
                                        </div>
                                        <div className="price__display">
                                            <div className="doller__sign">
                                                $
                                            </div>
                                            <div className="subtotal">
                                                {` ${price}`}
                                            </div>

                                        </div>
                                        < div className="Delet__single__items">
                                            <button className='btn btn-danger' onClick={() => REMOVE_ITEM_FROM_WISH_LIST(id)}> <Trash /> </button>

                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>


                </div>
            </div>
        </section>

    )
}

export default WishList
