import React from 'react';

const Blog = () => {
    return (
        < div >
            <div className="container">
                <div className="row p-4 m-5">
                    <div className="col-md-12">
                        <div className="card p-4 shadow-lg p-3 mb-5 bg-body rounded">
                            <h2 className="card-title text-danger">
                                {" "}
                                <i>
                                    # Difference between authorization and authentication ?
                                </i>{" "}
                            </h2>
                            <h4 className="mt-3">
                                <span className="text-info">
                                    Ans : <br />{" "}
                                </span>
                            </h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col"> Authentication</th>
                                        <th scope="col">Authorization</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <p className='lead'> Authentication is the act of validating that users are
                                                whom they claim to be. This is the first step in any
                                                security process.</p>
                                            {" "}
                                        </td>
                                        <td>
                                            Authorization in system security is the process of giving
                                            the user permission to access a specific resource or
                                            function. This term is often used interchangeably with
                                            access control or client privilege.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            Authentication, in the form of a key. The lock on the door
                                            only grants access to someone with the correct key in much
                                            the same way that a system only grants access to users who
                                            have the correct credentials.
                                        </td>
                                        <td>
                                            Authorization, in the form of permissions. Once inside,
                                            the person has the authorization to access the kitchen and
                                            open the cupboard that holds the pet food. The person may
                                            not have permission to go into the bedroom for a quick
                                            nap.{" "}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>
                                            It is used by both server and client. The server uses
                                            authentication when someone wants to access the
                                            information, and the server needs to know who is accessing
                                            the information. The client uses it when he wants to know
                                            that it is the same server that it claims to be.
                                        </td>
                                        <td>
                                            It defines that what data and information one user can
                                            access. It is also said as AuthZ.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card p-4 shadow-lg p-3 mb-5 bg-body rounded">
                            <h2 className="card-title text-danger">
                                {" "}
                                <i>
                                    # Why are you using firebase? What other options do you have
                                    to implement authentication ?
                                </i>{" "}
                            </h2>
                            <h4 className="mt-3">
                                <span className="text-info">
                                    Ans : <br />{" "}
                                </span>
                            </h4>
                            <p className='lead'>
                                # Firebase’s documentation is quite detailed, and you have many
                                options for integration.Once a user signs in for the first time,
                                you have access to basic profile information like photourl,
                                email, e.t.c. You can also use the provided authentication token
                                to verify the identity of users in your own backend services.
                                Also, you can monitor your users’ behavioral pattern with
                                analytics to deliver a more personalized experience.This is the
                                advantage with any Baas platform like Firebase. You can roll out
                                an MVP without many backend implementation worries.
                            </p>
                            <p className='lead'>
                                # The other options I you have to implement authentication is
                                STYTCH. <br /> I can use their SDKs for quick deployment or
                                direct API to use the authentication method of my choice.
                                There are multiple ways available such as social logins,
                                SMS/WhatsApp/Email passcodes, email magic links, TOTP apps, etc.
                                STYTCH has flexible pricing that adjusts as per my active user
                                base. And there is a free USD 100 worth of credits as the
                                welcome package.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card p-4 shadow-lg p-3 mb-5 bg-body rounded">
                            <h2 className="card-title text-danger">
                                {" "}
                                <i>
                                    #  What other services does firebase provide other than authentication ?
                                </i>{" "}
                            </h2>
                            <h4 className="mt-3">
                                <span className="text-info">
                                    Ans : <br />{" "}
                                </span>
                            </h4>
                            <p>
                                # Firebase is a Google-backed closed source platform with many excellent features that allow developers to create an MVP quickly. However, vendor lock-in one of its biggest concerns among developers and the main shortcoming of Firebase.The goal of every developer is to create awesome apps.  If you’re a developer, we are here to help you discover some of the best alternatives to Firebase to help take your mobile app development a notch higher.Firebase provides the best back-end server, great database and analytics solution, and useful integrations with other Google products. Most of all, users like that it’s free to use and has affordable subscription options. A wisely designed backend solution guarantees project scalability and data security. In the development process, up to 40% of efforts are made on building a flexible backend structure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;