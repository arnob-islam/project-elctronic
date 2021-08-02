import React from 'react'
import SingleProduct from '../components/SingleProduct';
import { UseContextGlobally } from '../components/contex';
import TittleThumb from './TittleThumb';
import Loading from '../components/Loading';


const Camara = () => {
    const { dislayLoading, productItems } = UseContextGlobally();
    //section tittle 
    const DivTitle = `Camara`

    //thumb name
    const props = 'camara'

    if (dislayLoading) {
        return <Loading />
    }

    const LaptopProducts = productItems.filter(item => item.catagory === 'camara')

    return (
        <section className='products_mobile product__sector'>
            <TittleThumb props={props} />
            <SingleProduct SpacificProducts={LaptopProducts} DivTitle={DivTitle} />
        </section>
    )
}

export default Camara
