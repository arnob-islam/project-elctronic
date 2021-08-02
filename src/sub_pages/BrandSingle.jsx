import React from 'react'
import { useParams } from 'react-router-dom'
import { UseContextGlobally } from '../components/contex';
import TittleThumb from './TittleThumb';
import Loading from '../components/Loading';
import SingleProduct from '../components/SingleProduct';


const BrandSingle = () => {
    const { dislayLoading, productItems } = UseContextGlobally();


    const { brand } = useParams()
    //section tittle 
    const DivTitle = brand

    //thumb name
    const props = 'Brands'


    if (dislayLoading) {
        return <Loading />
    }


    const BrandsProducts = productItems.filter(item => item.brand === brand)

    return (
        <section className='popular__product product__sector'>
            <TittleThumb props={props} />
            <SingleProduct SpacificProducts={BrandsProducts} DivTitle={DivTitle} />

        </section>

    );
}

export default BrandSingle
