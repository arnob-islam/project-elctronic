import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
    return (
        <div>
            <div class="error-container">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </div>
            <div class="link-container">
                <Link to='/'>home</Link>
            </div>
        </div>
    )
}

export default Error
