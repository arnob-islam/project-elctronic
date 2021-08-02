import React from 'react'
import { Link } from 'react-router-dom'


const SignUp = () => {


    const [SignupInfo, setSignupInfo] = React.useState({
        F_Name: '',
        L_Name: '',
        Email: '',
        Password: '',
        gender: '',

        dateOfBirth: ''
    })

    const [GoToHome, setGoToHome] = React.useState(false)


    const handleFormValue = (e) => {
        const newName = e.target.name
        const newValue = e.target.value
        setSignupInfo({ ...SignupInfo, [newName]: newValue })
    }
    function GetInformation() {
        return localStorage.getItem('USER') ? JSON.parse(localStorage.getItem('USER')) : []
    }


    const HandleSubmit = (e) => {
        e.preventDefault()
        const { F_Name, L_Name, Email, Password, dateOfBirth, gender } = SignupInfo

        if (F_Name && L_Name && Email && Password && dateOfBirth && gender) {
            let user = [{ id: new Date().getTime().toString(), ...SignupInfo }]
            const IsUserIsTrue = GetInformation()

            localStorage.setItem('USER', JSON.stringify([...IsUserIsTrue, ...user]))
            setGoToHome(true)
        }
    }


    if (GoToHome) {
        return window.location.href = '/'
    }



    return (
        <section className='__login_sector'>
            <main>
                <form onSubmit={HandleSubmit} >
                    <div className="form-floating">
                        <input type="text" className="form-control" onChange={handleFormValue} name='F_Name' />
                        <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" onChange={handleFormValue} name='L_Name' />
                        <label htmlFor="floatingInput">Last name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" onChange={handleFormValue} name='Email' id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" onChange={handleFormValue} name='Password' id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating">
                        <div className="male_container">
                            <input type="radio" className="fromale" onChange={handleFormValue} name='gender' value='male' />
                            <label htmlFor="floatingInput">Male</label>
                        </div>
                        <div className="male_container">
                            <input type="radio" className="formale" onChange={handleFormValue} name='gender' value='female' />
                            <label htmlFor="floatingInput">Felmale </label>
                        </div>
                    </div>
                    <div className="form-floating">
                        <input type="date" className="form-control" onChange={handleFormValue} name='dateOfBirth' />
                        <label htmlFor="floatingPassword">Date of birth</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
                <div className="to_signup_form">
                    <Link to='/user/login/signup/' className='iuetjkj4t'>Already login ?</Link>
                </div>
            </main>
        </section>
    )
}



export default SignUp
