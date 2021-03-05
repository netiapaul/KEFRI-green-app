import React, { useState } from 'react';
// import Logo from '../../assets/images/Logo.png'
import './login.css';
import { Link } from 'react-router-dom';

// initial Value for the form

const initialValues = Object.freeze({
    email: "",
    password: "",
  });

const Login = () => {

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {

        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);

    }

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

                <div>
                    <h1 className="text-center m-4">LOGIN</h1>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3 ">
                        
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" id="email" value={values.email} onChange={handleInputChange} required/>

                    </div>

                    <div className="mb-3 ">

                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="password" value={values.password} onChange={handleInputChange} required/>

                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>

                </form>
                
                </div>

            </div>

        </React.Fragment>
    )
}

export default Login;
