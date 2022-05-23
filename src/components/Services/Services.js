import React, { useEffect, useState } from 'react';
import ShowServices from '../ShowServices/ShowServices';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then((response) => response.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div>
            <div>
                <h2 className="text-info text-center p-5">
                    {" "}
                    <i>My Services</i>{" "}
                </h2>
            </div>
            <div className="container">
                <div className="row">
                    {services.map((service) => (
                        <ShowServices key={service.id} service={service}></ShowServices>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;