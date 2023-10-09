import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

function Registraion() {
    const fullname = useRef();
    const email = useRef();
    const password = useRef();
    const [showHome, setShowHome] = useState(false)
    const [showEmail, setShowEmail] = useState(false)
    const localSignUp = localStorage.getItem("SignUp")
    const localEmail = localStorage.getItem("email")
    const localPassword = localStorage.getItem("password")


    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
        }
        if (localEmail) {
            setShowEmail(true)
        }
    })

    const handleClick = () => {
        //console.log(fullname.current.value, email.current.value, password.current.value)
        if (fullname.current.value && email.current.value && password.current.value) {

            localStorage.setItem("name", fullname.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("SignUp", email.current.value)
            alert("data saved")
            window.location.reload()
        }
    }

    const handleSignIn = () => {
        if (email.current.value == localEmail && password.current.value == localPassword) {

        } else {
            alert("enter valid Email and Password")
        }
    }


    return (
        <>

            {showHome ? <Dashboard /> : (
                showEmail ?

                    // <Login />
                    <div className="container">
                        <div className='row'>
                            <div className="col-md-6 m-auto shadow">
                                <div className='p-5'>
                                    <h3>
                                        Hello {localStorage.getItem("name")}
                                    </h3>
                                    <p>Please enter your email and password for login</p>
                                    <form>

                                        <div className="form-group mb-3">
                                            <label htmlFor="Email">Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email" ref={email} />

                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="Password1">Password</label>
                                            <input type="password" className="form-control" placeholder="Password" ref={password} />
                                        </div>

                                        <button onClick={handleSignIn} className="btn btn-primary">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    :


                    <div className="container">
                        <div className='row'>
                            <div className="col-md-6 m-auto shadow">
                                <div className='p-5'>


                                    <form>
                                        <div className="form-group mb-3">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" className="form-control" placeholder="Enter name" ref={fullname} />

                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="Email">Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email" ref={email} />

                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="Password1">Password</label>
                                            <input type="password" className="form-control" placeholder="Password" ref={password} />
                                        </div>

                                        <button onClick={handleClick} className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            )
            }
        </>
    )
}

export default Registraion