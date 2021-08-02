import React from 'react'
import SingleProduct from '../components/SingleProduct';
import { UseContextGlobally } from '../components/contex';
import TittleThumb from './TittleThumb';
import Loading from '../components/Loading'

const ProductsOfTheMonth = () => {
    const { dislayLoading, productItems } = UseContextGlobally();
    //section tittle 
    const DivTitle = `products of the month`

    //thumb name
    const props = 'Month'


    if (dislayLoading) {
        return <Loading />
    }

    const contentProducts = productItems.filter(item => item.choice.seclect__of__the__month)
    const contentProductsSort = contentProducts.sort(() => Math.random() - 0.5)

    return (
        <section className='product_of_the_month product__sector'>
            <TittleThumb props={props} />
            <SingleProduct SpacificProducts={contentProductsSort} DivTitle={DivTitle} />
        </section>
    )
}

export default ProductsOfTheMonth
