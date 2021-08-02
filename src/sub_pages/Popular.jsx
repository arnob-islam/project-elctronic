import React from 'react'
import SingleProduct from '../components/SingleProduct';
import { UseContextGlobally } from '../components/contex';
import TittleThumb from './TittleThumb';
import Loading from '../components/Loading';


const Popular = () => {
    const { dislayLoading, productItems } = UseContextGlobally();
    //section tittle 
    const DivTitle = `see our popular collection`

    //thumb name
    const props = 'Popular'


    if (dislayLoading) {
        return <Loading />
    }


    const contentProducts = productItems.filter(item => item.choice.popular)
    return (
        <section className='popular__product product__sector'>
            <TittleThumb props={props} />
            <SingleProduct SpacificProducts={contentProducts} DivTitle={DivTitle} />
        </section>

    );
}

export default Popular
