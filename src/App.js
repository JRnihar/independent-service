
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
      <Route path='/checkout' element={
        <RequireAuth>
            <CheckOut></CheckOut>
        </RequireAuth>
      }></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
