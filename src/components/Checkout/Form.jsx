import React, { useEffect } from 'react'

import { UseContextGlobally } from '../contex';
import ConfirmCheckout from './ConfirmCheckout';


const ChakoutForm = ({ checkoutProducts, userForm, selector, USER_INFORMATION }) => {
    const { total } = UseContextGlobally()

    const [info, setInfo] = React.useState({
        name: '',
        email: '',
        number: '',
        country: '',
        state: '',
        area: '',
        zip: '',
        address: '',
        note: ''
    })
    const [countryState, setcountryState] = React.useState([])

    const [countryArea, setcountryArea] = React.useState([])

    const [phoneAlart, setphoneAlart] = React.useState(true)

    const [confirmForm, setconfirmForm] = React.useState(false)



    const handleFormValue = (e) => {
        const newName = e.target.name
        const newValue = e.target.value

        setInfo({ ...info, [newName]: newValue })

    }


    useEffect(() => {
        const { country, state, number } = info
        if (info.country) {
            const countryName = selector.filter(e => e.name === country)
            setcountryState(countryName);
        }

        if (info.state) {
            const spacificArea = selector.filter(e => e.name === country).map(e => e.states).map(e => e.filter(e => e.name === state)).map(e => e.map(e => e.cities))

            setcountryArea(spacificArea)
        }

        if (number && (number.length < 4 || number.length > 15)) {
            setphoneAlart(false)

        } else {
            setphoneAlart(true)
        }

    }, [selector, info])
    const confirmChackout = () => {
        const { country, number, name, email, zip, address, note } = info

        if (country && number && name && email && zip && address && note) {
            USER_INFORMATION(info)
            setconfirmForm(true)
        }
    }

    if (confirmForm) {
        return <ConfirmCheckout userForm={userForm} checkoutProducts={checkoutProducts} total={total} />
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (

        <div className="container">
            <div className="row inner_lwjkog mt-5">
                <form className='checkout form suplayerlwhgw' onSubmit={handleSubmit} >
                    <div className="row g-3 ">
                        <div className="sljowlhv">
                            <label htmlFor="fullname" className="form-label">Full name</label>

                            <input type="text" className="form-control" name='name' id="fullname" onChange={handleFormValue} placeholder="" required />

                        </div>

                        <div className="sljowlhv">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name='email' id="email" placeholder="you@example.com" onChange={handleFormValue} required />


                        </div>

                        <div className="sljowlhv">
                            <label htmlFor="number" className={phoneAlart ? "form-label" : "form-label show_phone_alart"}>Enter a valid number</label>
                            <input type="number" className={phoneAlart ? "form-control" : "form-control show_phone_alart"} name='number' id="user_number" onChange={handleFormValue} required />


                        </div>

                        <div className="country__state inneroiklso">
                            <div className="country__ inercontentjljl">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select className="form-select option-country" name='country' id="country" onChange={handleFormValue} required>

                                    <option>Choose...</option>
                                    {selector.map(e => {
                                        return (<option key={e.id} >{e.name} </option>)
                                    })}

                                </select>

                            </div>

                            <div className="state__ inercontentjljl">
                                <label htmlFor="state" className="form-label">State</label>
                                <select className={info.country ? "form-select option-state" : 'form-select option-state is__selected'} name='state' id="state" onChange={handleFormValue} required>
                                    <option>Choose...</option>
                                    {countryState.map(e => {
                                        const { states } = e
                                        return states.map(e => {
                                            return (
                                                <option key={e.id}> {e.name} </option>
                                            )
                                        })
                                    })}
                                </select>

                            </div>

                        </div>
                        <div className="zip__area inneroiklso">
                            <div className="area__ inercontentjljl">
                                <label htmlFor="area" className="form-label">area</label>
                                <select className={info.state ? "form-select option-area" : 'form-select option-area is__selected'} name='area' id="area" onChange={handleFormValue} required>
                                    <option>Choose...</option>
                                    {countryArea.map(e => {
                                        return e.map(e => {
                                            return e.map(e => {
                                                return <option key={e.id}> {e.name ? e.name : ''} </option>

                                            })
                                        })
                                    })}
                                </select>

                            </div>

                            <div className="zip__ inercontentjljl">
                                <label htmlFor="zip" className="form-label">Zip</label>

                                <input type="text" className="form-control" name='zip' id="zip" onChange={handleFormValue} required />

                            </div>
                        </div>

                        <div className="sljowlhv">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" name='address' id="address" placeholder="1234 Main St" onChange={handleFormValue} required />


                        </div>

                        <div className="sljowlhv">
                            <label htmlFor="address2" className="form-label">Note for rider</label>
                            <input type="text" className="form-control" name='note' onChange={handleFormValue} id="address2" placeholder="Apartment or house" required />
                        </div>
                    </div>
                    <button className='btn btn-primary d-none' type='submit'> submit </button>
                </form>

                <div className="product__summery suplayerlwhgw">
                    <div className="product__item__">
                        {checkoutProducts.map(product => {
                            const { id, image_url, name, price, amount } = product
                            return (
                                <div className="" key={id}>
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="img_container">
                                            <img src={image_url} alt={name} />
                                        </div>
                                        <div className="name_title">
                                            <span>{name} </span>
                                        </div>
                                        <div className="price_cont">
                                            <span> $ {price}  </span>
                                        </div>
                                        <div className="product_qty">
                                            <span> {`qty ${amount}`} </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="price__total__produtc_summery">
                        <div className="summery_title">
                            <h4> Order Summary </h4>
                        </div>
                        <div className="product_count_price">
                            <h5> Subtotal  <span>({checkoutProducts.length}Items)</span> </h5>
                        </div>
                        <div className="shiping__charge">
                            <h5>shiping charge <span>$ 10</span></h5>
                        </div>
                        <div className="total__sec">
                            <h5>Total <span> {checkoutProducts.length === 1 ? checkoutProducts.map(e => e.amount * e.price + (10)) : total + 10}</span></h5>
                        </div>
                        <div className="chackout_butto_">
                            <button className='btn btn-primary' onClick={confirmChackout}>chackout </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>







    )
}

export default ChakoutForm
