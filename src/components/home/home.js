import React,{useState} from 'react';
import './home.css';

const initialValues = Object.freeze({
    name: "",
    longitude: "",
    latitude: "",
    species: "",
  });

  
const Home = () => { 


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
        <>
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

                    <button type="submit" className="btn btn-primary">Submit Data</button>
                    
                </form>
                
                </div>

            </div>

        </>
    )
};

export default Home;
