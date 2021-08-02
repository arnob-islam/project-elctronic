import React from 'react'
import { Link } from 'react-router-dom';

const TittleThumb = ({ props }) => {

    return (
        <nav aria-label="breadcrumb" className='bread__thumb mt-5'>
            <div className="container pt-5">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className='nav-link' to="/">Home</Link></li>
                    <li className="breadcrumb-item nav-link active" aria-current="page">{props}</li>
                </ol>
            </div>
        </nav>
    )
}

export default TittleThumb
