import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { UseContextGlobally } from './contex';

import Hart from './svg/Hart';
import Bag from './svg/Bag';


const SingleProduct = ({ SpacificProducts, DivTitle }) => {

    const { ADD_TO_CART, ADD_TO_WISH } = UseContextGlobally()

    const [InputValue, setInputValue] = React.useState('')
    const [SpacifiItems, setSpacifiItems] = React.useState(SpacificProducts)



    const input__fild = React.useRef()

    const HandeSubmitInput = () => {
        setInputValue(input__fild.current.value)
    }
    useEffect(() => {
        if (InputValue) {
            const produchSercth = (searchValue, Products) => {
                return Products.filter(e => {
                    const regex = new RegExp(searchValue, 'gi')
                    return e.catagory.match(regex) || e.name.match(regex) || e.sub_catagory.match(regex) || e.brand.match(regex)
                })
            }
            return setSpacifiItems(produchSercth(InputValue, SpacificProducts))
        }

        return setSpacifiItems(SpacificProducts)

    }, [InputValue, SpacificProducts])

    if (SpacifiItems.length < 1) {
        const IfListIsEmpty = []
        for (let index = 0; index < 10; index++) {
            const onlyPrice = SpacificProducts[index].price
            IfListIsEmpty.push(onlyPrice)
        }

        const unWantedItems = SpacificProducts.filter(e => e.price === Math.min(...IfListIsEmpty))
        return setSpacifiItems(unWantedItems)
    }

    return (
        <>
            <div className="container">
                <div className='d-flex justify-content-between flex-column flex-md-row mb-4' >
                    <h4>{DivTitle}</h4>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="" onChange={HandeSubmitInput} ref={input__fild} id="searc__product__fild" placeholder='search...' />
                        <button className="btn_search_products" type='submit'>search</button>
                    </form>

                </div>
                <div className="row">
                    {SpacifiItems.map(item => {
                        const { id, image_url, name, price, former_price } = item
                        return (
                            <div className="single__product__wrapper" key={id}>
                                <article className="single__products__body">
                                    <div className="singe__products__image">
                                        <img src={image_url} className="img-fluid" alt={name} />
                                    </div>
                                    <div className="single__carts__container">
                                        <div className="cart__wrapper">
                                            <button className='add__to__cart' onClick={() => ADD_TO_CART(id)}>
                                                <Bag />
                                            </button>

                                            <button className='add__to__wishlist' onClick={() => ADD_TO_WISH(id)}>
                                                <Hart />
                                            </button>
                                        </div>
                                    </div>
                                    <Link to={`/single/product/${id}`} className="products__ref_ mt-3">
                                        <span> {name} </span>
                                        <del>$ {former_price}</del>
                                        <h6>$ {price}</h6>
                                    </Link>
                                </article>
                            </div>
                        )
                    })}

                </div>
            </div>



        </>
        // <h1>hewwo</h1>
    );
}







export default SingleProduct;
