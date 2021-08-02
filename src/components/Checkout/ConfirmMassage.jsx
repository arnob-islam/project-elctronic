import React from 'react'
import { Link } from 'react-router-dom'
import Check from '../svg/Check';

const ConfirmMassage = () => {
    return (
        <div className='order_is_placed'>
            <div className="container">
                <div className="hojoborol">
                    <div className="wrapper d-flex flex-column text-center gap-3">
                        <h2>your order will be placed</h2>
                        <Check />
                        <div className="home_buton">
                            <Link to='/' className='btn btn-primary mt-3'>continue shoping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmMassage
