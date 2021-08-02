import React from 'react'
import TittleThumb from './../sub_pages/TittleThumb';
import Check from '../components/svg/Check';
import User from '../components/svg/User';

const UserProfile = () => {
    const [GoToHome, setGoToHome] = React.useState(false)
    function GetInformation() {
        return localStorage.getItem('USER') ? JSON.parse(localStorage.getItem('USER')) : []
    }

    const IsUserIsTrue = GetInformation()

    const UserIsLogOut = () => {
        // const thatUser = IsUserIsTrue.filter(e => e.id === IsUserIsTrue[IsUserIsTrue.length - 1].id)

        localStorage.removeItem('USER')
        setGoToHome(true)
    }

    if (GoToHome) {
        return window.location.href = '/'
    }

    const { id, F_Name, L_Name, Email, dateOfBirth, gender } = IsUserIsTrue[IsUserIsTrue.length - 1]


    return (
        <section>
            <TittleThumb props={'my accont'} />

            <div className="container">
                <div className=" kalsjfojl">
                    <div className="user__branding__">
                        <div className="branding__head">

                            <div className="branding__head__body" key={id}>
                                <div className="branding_name">
                                    <div className="user__svg">
                                        <User />
                                    </div>
                                    <div className="name_and_mail">
                                        <h4> {`${F_Name} ${L_Name}`} </h4>
                                        <Check />
                                    </div>
                                </div>
                                <div className="branding_mail">
                                    <span> {Email} </span>
                                </div>
                            </div>


                        </div>
                        <div className="other_switcher">
                            <ul className='switcher__container'>
                                <li>
                                    Basic information
                                </li>
                                <li className='log_out_list'>
                                    <button className='log_out_btn' onClick={UserIsLogOut}> Log out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="user__details__">
                        <div className="user__basic__information">
                            <div className="title">
                                <span>Basic Information</span>
                            </div>
                            <div className="information__body">
                                <div className="body_title">
                                    PERSONAL INFORMATION
                                </div>
                                <div className="body__">

                                    <div className='body__infos' key={id}>
                                        <div className="body__content">
                                            <div className="content_quistion">First Name </div>
                                            <div className="content_display">
                                                {F_Name}
                                            </div>
                                        </div>
                                        <div className="body__content">
                                            <div className="content_quistion">last Name </div>
                                            <div className="content_display">
                                                {L_Name}
                                            </div>
                                        </div>
                                        <div className="body__content">
                                            <div className="content_quistion">Email </div>
                                            <div className="content_display">
                                                {Email}
                                            </div>
                                        </div>
                                        <div className="body__content">
                                            <div className="content_quistion">Date of birth </div>
                                            <div className="content_display">
                                                {dateOfBirth}
                                            </div>
                                        </div>
                                        <div className="body__content">
                                            <div className="content_quistion"> Gender</div>
                                            <div className="content_display">
                                                <span> {gender}</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProfile
