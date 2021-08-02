import React from "react";
import SingleProduct from "../components/SingleProduct";

import { UseContextGlobally } from "../components/contex";


const Product_of_the_month = () => {

    const { productItems } = UseContextGlobally();
    // const xx = productItems.filter(e => e.choice.recomanded !== "" && !undefined)

    //for div tittle
    const DivTitle = `Top Product Of The Month`


    const contentProducts = productItems.filter(item => item.choice.seclect__of__the__month)

    if (contentProducts.length > 12) {
        const newSelectedProducts = contentProducts.slice(0, 10)
        return (
            <section className='product_of_the_month product__sector'>
                <SingleProduct SpacificProducts={newSelectedProducts} DivTitle={DivTitle} />
            </section>
        )
    }

    return (
        <section className='product_of_the_month'>
            <SingleProduct SpacificProducts={contentProducts} DivTitle={DivTitle} />
        </section>

    );
};

export default Product_of_the_month;
