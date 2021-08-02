import React from 'react'
import SingleProduct from '../components/SingleProduct';
import { UseContextGlobally } from '../components/contex';
import TittleThumb from './TittleThumb';
import Loading from '../components/Loading';


const Mobile = () => {
    const { dislayLoading, productItems } = UseContextGlobally();
    //section tittle 
    const DivTitle = `Catagory Mobile`

    //thumb name
    const props = 'Mobile'


    if (dislayLoading) {
        return <Loading />
    }


    const MobileProducts = productItems.filter(item => item.catagory === ('mobile' || 'Mobile'))

    return (
        <section className='products_mobile product__sector'>
            <TittleThumb props={props} />
            <SingleProduct SpacificProducts={MobileProducts} DivTitle={DivTitle} />
        </section>
    )
}

export default Mobile
