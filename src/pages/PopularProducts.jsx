import React from 'react'
import { UseContextGlobally } from '../components/contex';
import SingleProduct from '../components/SingleProduct';


const PopularProducts = () => {
    const { productItems } = UseContextGlobally();
    // const xx = productItems.filter(e => e.choice.recomanded !== "" && !undefined)

    //for div tittle
    const DivTitle = `popular`

    const contentProducts = productItems.filter(item => item.choice.popular)

    if (contentProducts.length > 12) {
        const newSelectedProducts = contentProducts.slice(10, 22)
        return (
            <section className='popular__product product__sector'>
                <SingleProduct SpacificProducts={newSelectedProducts} DivTitle={DivTitle} />
            </section>
        )
    }

    return (
        <section className='popular__product product__sector'>
            <SingleProduct SpacificProducts={contentProducts} DivTitle={DivTitle} />
        </section>

    );
}

export default PopularProducts
