import React from 'react';

const Footer = () => {
    return (
        <div>
            <div>
                <div className="bg-info text-white p-4">
                    <div className="row ">
                        <div className="col-md-4">
                            <h2>Subscribe Me</h2>
                            <small className="lead">
                                Sign up to my newsletter to get the lasted news and offer
                            </small>
                            <input
                                className="form-control mt-3"
                                placeholder="Enter your Email"
                                type="text"
                                name=""
                                id=""
                            />
                            <button className="btn btn-primary mt-3">GET NOTIFIELD</button>
                        </div>
                        <div className="col-md-4">
                            <h2 className="text-center mt-4 mb-2">
                                <i>Opening time</i>
                            </h2>
                            <div className="d-flex justify-content-around">
                                <div>
                                    <p>Sunday</p>
                                    <p>Monday</p>
                                    <p>Tuesday</p>
                                    <p>Wednesday</p>
                                    <p>Thirsday</p>
                                </div>
                                <div>
                                    <p>7.00 - 17.00</p>
                                    <p>7.00 - 17.00</p>
                                    <p>7.00 - 17.00</p>
                                    <p>7.00 - 17.00</p>
                                    <p>7.00 - 17.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2 className=" mt-4 mb-2">
                                <i>Recent Work</i>
                            </h2>
                            <img
                                src="https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg"
                                className="img-fluid w-50 rounded"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="container">
                        <hr />
                    </div>
                    <div className="text-center">Copyright @ 2022 <span className="text-dark">JR_NIHAR</span> | All Right Reserved.</div>
                </div>

            </div>

            <div>

            </div>
        </div>
    );
};

export default Footer;