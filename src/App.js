import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Blogs from './Pages/Blog/Blogs';
import RequreAuth from './Pages/RequreAuth/RequreAuth';
import Footer from './Pages/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        
        <Route path='/blogs' element={<RequreAuth><Blogs></Blogs></RequreAuth>}></Route>
      </Routes>
      <Footer></Footer>
      
      
    </div>
  );
}

export default App;
