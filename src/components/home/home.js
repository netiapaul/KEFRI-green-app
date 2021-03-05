import React from 'react';
import './home.css';

const Home = () => { 
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

                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="e.g Mwihoko"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="longitude" className="form-label">Longitude</label>
                        <input type="number" className="form-control" id="longitude" placeholder="e.g 36.6588983433"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="latitude" className="form-label">Latitude</label>
                        <input type="number" className="form-control" id="latitude" placeholder="e.g -1.20266883724"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="species" className="form-label">Species</label>
                        <input type="text" className="form-control" id="species" placeholder="e.g neema"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit Data</button>
                </form>
                
                </div>

            </div>

        </>
    )
};

export default Home;