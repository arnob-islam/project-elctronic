import React from 'react'
import Chackout from './Chackout';

import { UseContextGlobally } from '../contex';


const CheckoutByCart = () => {
    const { cartItem } = UseContextGlobally()

    return (
        <div>
            <Chackout checkoutProducts={cartItem} />
        </div>
    )
}

export default CheckoutByCart
