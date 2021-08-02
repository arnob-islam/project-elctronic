import React from 'react'
import SingleProduct from '../components/SingleProduct';
import { UseContextGlobally } from '../components/contex';
import TittleThumb from './TittleThumb';
import Loading from '../components/Loading';


const ComputerAccosories = () => {
    const { dislayLoading, productItems } = UseContextGlobally();

    //section tittle 
    const DivTitle = `Computer and Accosories`

    //thumb name
    const props = 'Accories'

    if (dislayLoading) {
        return <Loading />
    }

    const AllAccosories = []

    const computers = productItems.filter(item => item.catagory === 'computer')
    const chipset = productItems.filter(item => item.catagory === 'chipset')
    const monitor = productItems.filter(item => item.catagory === 'monitor')
    const internet = productItems.filter(item => item.catagory === 'internet')
    const keybord = productItems.filter(item => item.catagory === 'keybord')

    AllAccosories.push(...computers, ...chipset, ...monitor, ...internet, ...keybord)

    return (
        <section className='products_mobile product__sector'>
            <TittleThumb props={props} />
            <SingleProduct SpacificProducts={AllAccosories} DivTitle={DivTitle} />
        </section>
    )
}

export default ComputerAccosories
