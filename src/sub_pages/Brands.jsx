import React from 'react'

import { UseContextGlobally } from '../components/contex';
import TittleThumb from './TittleThumb';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom'


const Brands = () => {
    const { dislayLoading, productItems } = UseContextGlobally();

    const BrandsName = [...new Set(productItems.map(cata => cata.brand))]



    if (dislayLoading) {
        return <Loading />
    }
    return (
        <section>
            <TittleThumb props={'All brands'} />
            <div className="container">
                <div className="row">
                    <div className="form_container">


                    </div>
                    <div className="brands_kljfaow4t">
                        {BrandsName.map((e, index) => {

                            return <div className="brand_body" key={index}> <Link to={`/products/catagory/brands/${e}`}>{e}</Link> </div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands
