import React, { useState,useEffect } from 'react';
import './login.css';
import Header from '../header/header'
import { Link,useHistory } from 'react-router-dom';

// initial Value for the form

const initialValues = Object.freeze({
    email: "",
    password: "",
  });

const Login = () => {

    let history = useHistory();
 
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {

        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value,
        });
      };

    //   const fetchData = () => {
    //       fetch('http://localhost:5000/api/v1/users/login',{
    //         method: 'POST',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(values)
    //       })
    //       .then(res => res.json())
    //       .then(data => console.log(data))
    //   }

      const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://sitematching.herokuapp.com/api/v1/users/login',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          })
          .then(response => {
            if(!response.ok){
                throw new Error(response.status);
            }else{
                history.push('/home');
                return response.json();
            } 
            })
          .then(data => localStorage.setItem('user',JSON.stringify(data.userId)))
          .catch(err => console.log(err))
    }


    return(
        <React.Fragment>
            {/* Image and text  */}
 
            <Header />

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
