
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import PrivetAuth from './components/PrivetAuth/PrivetAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={
          <PrivetAuth>
            <Orders></Orders>
          </PrivetAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
