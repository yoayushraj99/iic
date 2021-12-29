import React, { useState } from "react"
import IncubationNav from '../Nav-foot/IncubationNav'
import Footer from '../Nav-foot/Footer'
import './style.css'
import Swal from "sweetalert2"
import axios from "axios"

// const Background = require ('../../images/collegeEntranceAlt.jpg')

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        if(email !== "" && password !== ""){
            axios({
                method: 'POST',
                url: 'http://localhost:4000/user/login',
                data:{
                    "email" : email,
                    "password": password
                }
            }).then(res =>{
                console.log(res)
                Swal.fire('Login Successful','','success').then(modal =>{
                    console.log(res.data.token)
                    localStorage.setItem("authToken",res.data.token)
                    if(modal.isDismissed || modal.isConfirmed){
                        window.location.href="/admin"
                    }
                })
            }).catch(err =>{
                if (err.response.status === 400) {
                    Swal.fire('Error !','Wrong Email or Password entered.','error')
                }else if(err.response.status === 500) {
                    Swal.fire('Server Error !','Contact Support Immediately !','error')
                }else{
                    Swal.fire('Unexpected Error Occured !','Contact Support Immediately !','error')
                }
            })
        }else{
            if(email==="" && password===""){
                Swal.fire('Warning !','Email & Password Field are Empty','warning')
            }
            else if(email===""){
                Swal.fire('Warning !','Email Field Empty','warning')
            }
            else if(password===""){
                Swal.fire('Warning !','Password Field Empty','warning')
            }
        }
    }

    return (<>
        <IncubationNav />
            <div className="login-bg-pic-container d-flex align-items-center justify-content-center">
                {/* <div className="left-container"></div> */}
                <div className="right-container">
                    <div className="login-form p-3">
                        <h3 className="text-center">Innovation and Incubation Cell</h3>
                        <h1 className="my-4 text-center">Login</h1>
                            <p> Email</p>
                                <input className="form-control mb-3" type="email" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                            <p> Password</p>
                                <input className="form-control mb-3" type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                            <button className="btn btn-lg btn-primary w-100 mt-4" onClick={() => handleLogin()} >Login</button>
                    {/* <div className="new-user">
                        <p>New user ? <a href="/signup">Signup</a> </p>
                        <p><a href="/forgotpassword">Forgot Password</a> </p>
                    </div>
                     */}
                        <div className="cont-google mt-2">
                        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                            </g>
                        </svg>
                            &nbsp;&nbsp;Continue with Google 
                    </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>)
}

export default Login
