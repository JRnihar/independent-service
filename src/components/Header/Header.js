import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import Loading from '../Loading/Loading';

const Header = () => {
    const [user,loading] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
      <nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand> <i>Mahi-Photography</i> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink className='me-5  ' to='/'>Home</CustomLink>
                            <CustomLink className='me-5  ' to='/blog'>Blog</CustomLink>
                            <CustomLink className='me-5  ' to='/aboutMe'>About Me</CustomLink>
                            {   user
                             ?
                                <button onClick={handleSignOut} className='btn btn-info'><i class="fa-solid fa-right-to-bracket me-3"></i>SignOut</button> 
                                :
                                <CustomLink className='me-5 mb-4' to='/login'> <button className='btn btn-primary'><i class="fa-solid fa-right-to-bracket me-3"></i>Sign-In</button> </CustomLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </nav>
    );
};

export default Header;