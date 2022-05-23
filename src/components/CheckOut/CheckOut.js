import React from 'react';
import './CheckOut.css'

const CheckOut = () => {
    return (
        <div>
            <div>
                <h1 className='text-center mt-5'> <i>You Want to See my </i><span className='text-info'>Work</span> ??</h1>
                 {/* < hr className='horizontal-line'/>
                 < hr className='horizontal-line2'/> */}
            </div>
           <div className="container">
               <div className="row mt-5">
                   <div className="col-md-4">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            <img src='https://i.ibb.co/68J2g1v/271887411-290701369621171-7973811737486407855-n-1.jpg' className="card-img-top" alt="..." />
                        </div>
                   </div>
                   <div className="col-md-4">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            <img src='https://i.ibb.co/1s4qwHz/248716907-634311041065831-769698225915368661-n-1.jpg' className="card-img-top" alt="..." />
                        </div>
                   </div>
                   <div className="col-md-4">
                        <div className="card shadow p-3 mb-5 bg-body rounded">
                            <img src='https://i.ibb.co/Sf17XFX/271957886-693765668503417-5563936802721346086-n.jpg' className="card-img-top" alt="..." />
                        </div>
                   </div>
               </div>
           </div>
            <div className='bg-dark text-white p-3'>
                <div >
                    <h1 className=' mt-5'> <i>What my Clients are saying </i> </h1>
                </div>
               <div className="container">
                    <div className="row mt-5 mb-3">
                        <div className="col-md-4">
                            <p><i>## 1: Amazing! We would like to say a huge thank you for capturing our special day. All the guests had nothing but praise for your professionalism and tact during the ceremony and reception.</i></p>
                        </div>
                        <div className="col-md-4">
                            <p><i>## 2:  Making memories is not an easy job. Having the people you trust the most on such instances is what I found with Mahi. There is a comfort level with the team plus they bring new trend to the work they do.

                                Bhargav gives his personal best on all times. He has done more than expected in delivering high quality insights on the wedding.</i></p>
                        </div>
                        <div className="col-md-4">
                            <p><i>## 3: We just got our Pre wedding photos back and they are blown away by how beautiful they are.Additionally we had such great experience with Mahi Photography.He gave us info on what to wear,what would look the best in photos for different locations.He was able to go with the flow and at the same time capture the essential moments and features we asked him to do. He did a tremendous job and we are very pleased with results.

                                Highly Recommended .Great Work !!!!

                                 —Archie+Sh</i></p>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default CheckOut;