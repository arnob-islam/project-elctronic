import React from 'react'
import SingleProduct from '../components/SingleProduct';
import { UseContextGlobally } from '../components/contex';
import TittleThumb from './TittleThumb';
import Loading from '../components/Loading';


const Recomanded = () => {
    const { dislayLoading, productItems } = UseContextGlobally();
    //section tittle 
    const DivTitle = `Catagory Mobile`

    //thumb name
    const props = 'Mobile'


    if (dislayLoading) {
        return <Loading />
    }


    const RecomanedProducts = productItems.filter(item => item.choice.recomanded)


    return (
        <section className='products_mobile product__sector'>
            <TittleThumb props={props} />
            <SingleProduct SpacificProducts={RecomanedProducts} DivTitle={DivTitle} />
        </section>
    )
}

export default Recomanded
