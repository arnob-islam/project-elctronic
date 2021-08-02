import React from 'react'
import Chackout from './Chackout';
import { UseContextGlobally } from '../contex';



const CheckoutBySingle = () => {
    const { singleItem } = UseContextGlobally()

    return (
        <Chackout checkoutProducts={singleItem} />
    )
}

export default CheckoutBySingle
