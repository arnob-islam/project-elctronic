import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
    return (
        <div className='error_container'>
            <div className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </div>
            <div className="link-container">
                <Link to='/'>home</Link>
            </div>
        </div>
    )
}

export default Error
