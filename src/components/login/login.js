import React from 'react';
// import Logo from '../../assets/images/Logo.png'
import './login.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Login = () => {
    return(
        <React.Fragment>
            {/* Image and text  */}
 
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <p className="navbar-brand p-2" href="#">
                        <img src="https://www.kefri.org/images/trial-2.png" alt="logo" width="50" className="img-fluid"/>
                        <span className="navbar-brand h1 text-light">Green App</span> 
                    </p>
                </div>
            </nav>

            {/* Form Card */}
            <div className="card mt-5 mx-auto">

                <div className="card-body">

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                
                </div>

            </div>

        </React.Fragment>
    )
}

export default Login;