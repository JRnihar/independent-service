import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import './Home.modul.css'

const Home = () => {
    return (
        <div className='home-body'>
            <section>
                <div className="row">
                    <div className="col-12">
                        <img className='w-100' src="https://images.squarespace-cdn.com/content/v1/5fa7745f2f5c0e2041278686/b250ae91-c444-4a09-927e-f08b1ce8ada5/Ashyana+Banquets+Wedding+-+Downers+Grove.jpg?format=2500w" alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className='d-flex justify-content-center align-item-center p-5 bg-dark text-white'>
                    <h2 className='lead'>"A picture is worth thousand words they say, but we feel wedding photographs are more than that. For the amount of love, joy, promise, dreams and memories they carry within, it is an endless journey of emotions that the couple gets to experience on the big day.we make sure not a moment is missed when you are in the flow of the occasion."</h2>
                </div>
            </section>
            <section>
                <h2 className="text-info text-center p-5">
                    {" "}
                    <i>My Work station</i>{" "}
                </h2>
                <div className=" container mt-5">
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded"
                                src="https://i.pinimg.com/736x/5f/c7/99/5fc799bc8148f73df5a6c880238a611c.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5 className='text-white'>My Work Station</h5>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.pinimg.com/originals/f2/03/8a/f2038ae27214e61fc094b39d54211fd6.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5 className='text-white'>My Work Station</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://shotkit.com/wp-content/uploads/2020/08/Art-Meripol-4N0A0159-2.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3 className='text-white'>My Work Station</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
            <Services></Services>
            
            </div>
    );
};

export default Home;