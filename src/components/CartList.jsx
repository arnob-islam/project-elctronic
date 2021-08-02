import React from 'react'
import { UseContextGlobally } from './contex';
import ListSingle from './ListSingle';
import Loading from './Loading';


const CartList = () => {
    const { cartItem, dislayLoading } = UseContextGlobally()

    const tittle = 'Your cart'

    if (dislayLoading) {
        return <Loading />
    }

    if (cartItem.length < 1) {
        return (
            <section className='empty_cart empty_sfrgrwer'>
                <h1>
                  ༼ つ ◕_◕ ༽つ༼

                </h1>
            </section>
        )
    }

    return (
        <section className='view_all_cart wishandcartlist List-awqeverw'>
            <ListSingle honesItem={cartItem} DivTitle={tittle} />
        </section>
    )

}

export default CartList
