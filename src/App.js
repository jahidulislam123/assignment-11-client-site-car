import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <h2>hii tomra sobai kemon aco </h2>
    </div>
  );
}

export default App;
