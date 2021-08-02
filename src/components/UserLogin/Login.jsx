import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <section className='__login_sector'>
            <main className="form-signin">
                <form onSubmit={(e) => e.preventDefault()}>
                    <h1 className="h3 mb-3 fw-normal">Please log in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" name='Email' id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" name='Password' id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                </form>
                <div className="content_account">
                    <div className="to_signup_form">
                        <Link to='/create/account/new/user' className='iuetjkj4t'>Create account </Link>
                    </div>
                    <div className="recovery_accont">
                        <button to='/' className='iuetjkj4t'>Forger password</button>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Login
