import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import './home.css';

const initialValues = Object.freeze({
    name: "",
    longitude: "",
    latitude: "",
    species:[]
  });
  
  
const Home = () => { 
    let history = useHistory();

    const [data,setData] = useState("")
    
   
    useEffect(()=>{
      let user = JSON.parse(localStorage.getItem('user'));
      setData(user)
        
    },[data]);

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
        console.log(data);


    }

    const logOut = () =>{
        localStorage.clear();
        history.push('/')
    }

    return(
        <>
            {/* Image and text  */}
    
            <Header />
            
            {/* Form Card */}
            <div className="card mt-5 mx-auto">

                <div className="card-body">

                <form onSubmit={handleSubmit}>

                    <div className="mb-3 has-validation">

                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={values.name} onChange={handleInputChange} placeholder="e.g Mwihoko" required/>

                    </div>

                    <div className="mb-3">

                        <label htmlFor="longitude" className="form-label">Longitude</label>
                        <input type="number" className="form-control" id="longitude" name="longitude" value={values.longitude} onChange={handleInputChange} placeholder="e.g 36.6588983433" required/>


                    </div>

                    <div className="mb-3">

                        <label htmlFor="latitude" className="form-label">Latitude</label>
                        <input type="number" className="form-control" id="latitude" name="latitude" value={values.latitude} onChange={handleInputChange} placeholder="e.g -1.20266883724" required/>


                    </div>

                    <div className="mb-3">

                        <label htmlFor="species" className="form-label">Species</label>
                        <input type="text" className="form-control" id="species" name="species" value={values.species} onChange={handleInputChange} placeholder="e.g neema" required/>


                    </div>

                    <div className="d-flex justify-content-between">
                    <button type="submit" className={data ? "btn btn-primary":"btn btn-primary disabled"}>Submit Data</button>
                    <button type="submit" className="btn btn-outline-danger" onClick={logOut}>Logout</button>
                    </div>

                    
                    
                </form>
                
                </div>

            </div>

        </>
    )
};

export default Home;
