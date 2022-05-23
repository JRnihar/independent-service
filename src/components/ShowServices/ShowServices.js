import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowServices.css'

const ShowServices = (props) => {
    const { id, price, picture, name, description
    } = props.service
    const navigate=useNavigate()
    const handleCheckOut=()=>{
        navigate('/checkout')
    }
    return (
        <div className="col-md-6  p-3 ">
            <div className="card-group" >
                <div className="card shadow p-3 mb-5 bg-body rounded">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                            Price : {price}
                        </p>
                        <p className="card-text text-info">
                            Description : {description}
                        </p>
                        <p className="card-text">
                            <button onClick={handleCheckOut} className="btn btn-primary btn-large">Check-Out</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowServices;