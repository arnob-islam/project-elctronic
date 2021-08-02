import React, { useState } from 'react'
import Mail from '../svg/Mail';
import Phone from '../svg/Phone';
import Map from '../svg/Map';
import { Link } from 'react-router-dom';
import ConfirmMassage from './ConfirmMassage';

const ConfirmCheckout = ({ userForm, total, checkoutProducts }) => {

    const [confirmButtonAnim, setconfirmButtonAnim] = useState(false)

    const [ConfirmTheOrder, setConfirmTheOrder] = useState(false)


    const [RadioActive, setRadioActive] = useState(false)
    const Handle_checkbox = () => {
        setRadioActive(!RadioActive)
    }

    if (confirmButtonAnim) {
        setTimeout(() => {
            setConfirmTheOrder(true)
        }, 4500)
    }

    if (ConfirmTheOrder) {
        return <ConfirmMassage />
    }

    return (<section className='sure_confirm_chakout'>
        <div className="container">
            <div className="row align-items-center justify-content-center flex-column gap-3">
                <div className="col-5">
                    <div className="wrapper">
                        <div className="shiping__title">
                            Shipping & Billing
                        </div>
                        <div className="byer__name">
                            {userForm.name}
                        </div>
                        <div className="user__address">
                            <span> <Map /> {`${userForm.address} ${userForm.area} ${userForm.zip} ${userForm.state}  ${userForm.country}`}</span>
                        </div>
                        <div className="user__name">
                            <span> <Mail /> {userForm.email}</span>
                        </div>
                        <div className="user__number">
                            <span><Phone /> {userForm.number} </span>
                        </div>
                        <div className="sure__total">
                            <h5>Total <span> {checkoutProducts.length === 1 ? checkoutProducts.map(e => e.amount * e.price + (10)) : total + 10}</span></h5>

                        </div>
                    </div>
                </div>
                <div className="payment__mathod col-5">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" onClick={Handle_checkbox} value="option2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Cash on delevery
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" onClick={Handle_checkbox} value="option2" disabled />
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            David card
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" onClick={Handle_checkbox} value="option2" disabled />
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            cradit card
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" onClick={Handle_checkbox} value="option2" disabled />
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            master card
                        </label>
                    </div>
                    <div className="confirm_the_order_button d-flex justify-content-between">
                        <div className="order_to_home">
                            <Link to='/' className='btn btn-primary'>cancel</Link>
                        </div>
                        <div className="order-success">
                            {RadioActive && <div className='button__container'><button className={confirmButtonAnim ? 'do__circle' : ''} onClick={() => setconfirmButtonAnim(true)}><span className={confirmButtonAnim ? 'is__clicked' : ''}>Submit</span></button></div>}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section >
    )
}

export default ConfirmCheckout
