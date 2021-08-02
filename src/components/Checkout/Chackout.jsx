import React, { useReducer, useEffect, useCallback } from 'react'
import Reducer from './Reducer';
import Loading from '../Loading';
import { COUNTRY_INFO_SUCCESS, SELECTOR_INFORMATION } from './Type';
import Form from './Form';

const initialState = {
    selector: [],
    setCheckoutLoading: true,
    userForm: {
        name: '',
        email: '',
        number: '',
        country: '',
        state: '',
        area: '',
        zip: '',
        address: '',
        note: ''
    }
}
const url = `https://previewux.github.io/country-city-state/`

const Chackout = ({ checkoutProducts }) => {

    const [state, dispatch] = useReducer(Reducer, initialState)

    const controller = React.useMemo(() => new AbortController(), [])
    const signal = controller.signal;

    const CountryFecth = useCallback(async () => {
        const response = await fetch(url, { signal: signal })
        const data = await response.json()
        dispatch({ type: COUNTRY_INFO_SUCCESS, payload: data })
    }, [signal])

    const USER_INFORMATION = (info) => {
        dispatch({ type: SELECTOR_INFORMATION, payload: info })
    }


    useEffect(() => {
        CountryFecth()
        return function cleanup() {
            controller.abort()
        }
    }, [controller, CountryFecth])



    if (state.setCheckoutLoading) {
        return <Loading />
    }

    return (
        <section className='checkout_sector'>
            <Form {...state} checkoutProducts={checkoutProducts} USER_INFORMATION={USER_INFORMATION} />
        </section>
    )
}

export default Chackout
